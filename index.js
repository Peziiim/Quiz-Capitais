import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import csv from "csv-parser";

const app = express();
const port =  3000;



let quiz = [];


function loadCSV() {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream("capitals.csv")
      .pipe(csv())
      .on("data", (data) => {
        results.push({
          id: Number(data.id),
          country: data.country,
          capital: data.capital,
        });
      })
      .on("end", () => {
        quiz = results;
        console.log(`Capitais carregadas: ${quiz.length}`);
        resolve();
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function startServer() {
  try {
    await loadCSV();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Erro ao carregar CSV:", err);
  }
}

startServer();

let totalCorrect = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let currentQuestion = {};


app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});


app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}
