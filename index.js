import express from "express";
import bodyParser from "body-parser";
import  pg  from "pg";
import 'dotenv/config';

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }

});

db.connect()
  .then(() => console.log('Conectado ao PostgreSQL do Render '))
  .catch(err => console.error('Erro ao conectar', err));


const app = express();
const port = 3000;



let quiz = [];

db.query(`SELECT * FROM capitals`, (err, res) => {
  if(err){
    console.log("Erro ao realizar a consulta: ", err.stack)
  } else {
    quiz = res.rows
  }
})


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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
