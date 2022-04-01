import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HatsPage = () => <div>Hats Page</div>;
const Topic = (props) => {
  return (
    <div>
      <h1>Topic{props.match.params.topicId}</h1>
    </div>
  );
};

function App(props) {
  console.log(props);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route exact path="/topics/:topicId" element={<Topic />} />
      </Routes>
    </Router>
  );
}

export default App;
