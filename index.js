import express from "express";
import bodyParser from "body-parser";
import  pg  from "pg";


const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }

});

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


const app = express();
const port = 3000;



let quiz = [];

async function startServer() {
  try {
    console.log("DATABASE_URL definida?", !!process.env.DATABASE_URL);

    const result = await db.query("SELECT * FROM capitals");

    quiz = result.rows;

    console.log(`Capitais carregadas: ${quiz.length}`);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Erro ao carregar capitais:", err);
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
