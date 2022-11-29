import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Quiz } from "./Components/Pages/Quiz/Quiz";
import Result  from "./Components/Pages/Result/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    alert(data)
    setQuestions(data.results);
  };
  return (
    <Router>
      <div
        className="app"
        style={{ backgroundImage: "url(./Images/background.jpg)" }}
      >
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setname={setname}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>

        <></>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
