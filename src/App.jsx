import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {/* Result go here */}
      {!inputIsValid && <p>Please enter duration greter then zero</p>}
      {inputIsValid && <Result userInput={userInput}></Result>}
    </>
  );
}

export default App;
