import { useState } from "react";
import Swal from "sweetalert2";
import durmiendoVideo from "../src/assets/durmiendoNY.mp4";
import bananero from "../src/assets/bananero.jpg";
import "./App.css";

const questions = [
  {
    question: "Banda preferida de mi adolescencia",
    options: ["Don Adams", "Guasones"],
    answer: "Don Adams",
  },
  {
    question: "Tic cuando estoy acostado",
    options: [
      "Muevo los dedos de los pies como simio deprimido",
      "Me rasco el siempre sucio",
    ],
    answer: "Muevo los dedos de los pies como simio deprimido",
  },
  {
    question: "Película que más vi de chico",
    options: ["La saga completa de Heather brooke", "toy story"],
    answer: "La saga completa de Heather brooke",
  },
  {
    question: "¿Apodo que más me gusta que me digan?",
    options: ["Darth Nariz", "ny"],
    answer: "Darth Nariz",
  },
  {
    question: "¿Cuál es mi sacerdote preferido?",
    options: ["El papa francisco", "El padre Minner"],
    answer: "El padre Minner",
  },
  {
    question: "¿El sueño de la adolescencia (y el de hoy tambien)?",
    options: [
      "Desarrollarme en mi profesión y alcanzar la excelencia",
      "Actor porno",
    ],
    answer: "Actor porno",
  },
  {
    question: "¿Como son los apodos de mis papas?",
    options: ["Matius y el  tati-vertido", "Mati y tati"],
    answer: "Matius y el  tati-vertido",
  },
  {
    question: "¿Mi frase de cabecera es?",
    options: [
      "La tostadora sabe cosas que ni mi psicologo entiende.",
      "El que abandona no tiene premio",
    ],
    answer: "La tostadora sabe cosas que ni mi psicologo entiende.",
  },
  {
    question: "¿Qué pienso cuando veo una paloma con gorra?",
    options: ["Ese soy yo en otra vida", "Seguro está traficando migas"],
    answer: "Ese soy yo en otra vida",
  },
  {
    question: "¿Cuál es mi plan si todo sale mal?",
    options: [
      "Mudarse a Catamarca y criar carpinchos ninja",
      "Abrir una parrilla vegana en Marte",
    ],
    answer: "Abrir una parrilla vegana en Marte",
  },
];

function App() {
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [showBananero, setShowBananero] = useState(false);

  const closeModal = () => {
    setShowBananero(false);
  };

  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correct = questions.filter((q, i) => q.answer === answers[i]);
    const score = correct.length;
    const percentage = (score / questions.length) * 100;

    if (percentage >= 70) {
      Swal.fire(
        "¡Me conoces rey!",
        "Venite al club house el día que vos quieras",
        "success"
      );
    } else {
      Swal.fire("Mmm...", "A chuparla, I love Franky langdon");
    }
  };

  const handleShowAnswers = () => {
    setShowBananero(true);
  };

  return (
    <div className="quiz-container">
      <video autoPlay muted loop className="background-video">
        <source src={durmiendoVideo} type="video/mp4" />
      </video>

      <div className="quiz-content">
        <h1>¿Cuánto sabés del Narigón?</h1>
        <p>
          Si acertás 7 preguntas te invito a mi cumpleaños... sino, a chuparla
          😈
        </p>

        {questions.map((q, i) => (
          <div key={i} className="question">
            <label>
              {i + 1}. {q.question}
            </label>
            <select
              value={answers[i]}
              onChange={(e) => handleChange(e.target.value, i)}
            >
              <option value="">Seleccioná una respuesta</option>
              {q.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button onClick={handleSubmit}>Enviar respuestas</button>
        <button onClick={handleShowAnswers}>Ver respuestas correctas</button>

        {showBananero && (
          <div className="bananero-popup">
            <div className="bananero-content">
              <img src={bananero} alt="bananero" />
              <p>ESO ES POR METERTE CON MI ZONA, CON MI CABEZONA</p>
              <button onClick={closeModal}>X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
