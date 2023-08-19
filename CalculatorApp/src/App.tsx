import React from "react";
import CalculatorDigit from "./components/CalculatorDigit";
import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorOperator from "./components/CalculatorOperator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [operator, setOperator] = React.useState<string>();
  const [firstNumber, setFirstNumber] = React.useState<string>();
  const [secondNumber, setSecondNumber] = React.useState<string>();

  const [screenMaxNumberLimit] = React.useState<number>(12);

  const getInitialTheme = () => {
    const value = localStorage.getItem("theme");

    if (typeof value === "string") {
      return String(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "light");
      return "light";
    }
  };

  const [theme, setTheme] = React.useState<string>(getInitialTheme());

  const [result, setResult] = React.useState<string>();

  const clearCalculator = () => {
    setFirstNumber(undefined);
    setSecondNumber(undefined);
    setOperator(undefined);
    setResult(undefined);
  };

  const convertFloatNumber = () => {
    if (firstNumber === undefined && secondNumber === undefined) {
      // If any number hasn't entered yet
      setFirstNumber("0.");
      setResult("0.");
    } else if (firstNumber && secondNumber === undefined) {
      if (operator === undefined) {
        // If second number hasn't entered yet but first number has entered

        if (firstNumber.includes(".")) {
          //alert("You already set first number as float");
          return;
        }

        const updatedNumber = firstNumber + ".";
        setFirstNumber(updatedNumber);
        setResult(updatedNumber);
      } else {
        if (secondNumber === undefined) {
          setSecondNumber("0.");
          setResult("0.");
          return;
        }

        const updatedNumber = secondNumber + ".";
        setSecondNumber(updatedNumber);
        setResult(updatedNumber);
      }
    } else {
      // If first number and second number has entered

      if (secondNumber === undefined) return;

      if (secondNumber.includes(".")) {
        //alert("You already set second number as float");
        return;
      }

      const updatedNumber = secondNumber + ".";
      setSecondNumber(updatedNumber);
      setResult(updatedNumber);
    }
  };

  const pushDigits = (digit: string): void => {
    if (operator === undefined) {
      if (firstNumber === undefined) {
        setFirstNumber(digit);
        setResult(digit);
      } else {
        if (firstNumber.length == screenMaxNumberLimit) {
          //alert("First number overflow error");
        } else {
          const newNumber = firstNumber + digit;
          setFirstNumber(newNumber);
          setResult(newNumber);
        }
      }
    } else {
      if (secondNumber === undefined) {
        setSecondNumber(digit);
        setResult(digit);
      } else {
        if (secondNumber.length == screenMaxNumberLimit) {
          //alert("Second number overflow error");
        } else {
          const newNumber = secondNumber + digit;
          setSecondNumber(newNumber);
          setResult(newNumber);
        }
      }
    }
  };

  const pushOperators = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === undefined) return;

    const target = event.target as HTMLDivElement;

    let operatorFromClickedButton = target.id.split("-")[1];

    if (operatorFromClickedButton != "result") {
      setOperator(operatorFromClickedButton);
    } else {
      if (firstNumber === undefined) {
        //alert("Enter first number");
      } else if (secondNumber === undefined) {
        //alert("Enter second number");
      } else {
        let firstNumberConverted = Number(firstNumber);
        let secondNumberConverted = Number(secondNumber);

        let resultAfterClick = "";

        switch (operator) {
          case "divide":
            resultAfterClick = (
              firstNumberConverted / secondNumberConverted
            ).toFixed(12);
            setResult(String(resultAfterClick));
            break;
          case "substract":
            resultAfterClick = (
              firstNumberConverted - secondNumberConverted
            ).toFixed(12);
            setResult(String(resultAfterClick));
            break;
          case "add":
            resultAfterClick = (
              firstNumberConverted + secondNumberConverted
            ).toFixed(12);
            setResult(String(resultAfterClick));
            break;
          case "multiply":
            resultAfterClick = (
              firstNumberConverted + secondNumberConverted
            ).toFixed(12);
            setResult(String(resultAfterClick));
            break;
          default:
            break;
        }

        setSecondNumber(undefined);
        setOperator(undefined);
        setFirstNumber(String(result));
      }
    }
  };

  const toggleTheme = () => {
    const changedTheme = theme === "dark" ? "light" : "dark";
    setTheme(changedTheme);
    localStorage.setItem("theme", changedTheme);
  };

  return (
    <div className={`app h-screen relative${theme === "dark" ? " dark" : ""}`}>
      <div className="absolute right-5 top-5 hover:cursor-pointer hover:text-gray-400 hover:dark:text-white">
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faSun}
            size="2xl"
            onClick={() => toggleTheme()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            size="2xl"
            onClick={() => toggleTheme()}
          />
        )}
      </div>
      <div className="flex h-screen justify-center items-center">
        <div className="calculator">
          <div className="flex">
            <CalculatorScreen result={result} />
          </div>
          <div className="flex">
            <CalculatorOperator
              id="calculator-add"
              text="+"
              handleAction={(e) => pushOperators(e)}
            />
            <CalculatorOperator
              id="calculator-substract"
              text="-"
              handleAction={(e) => pushOperators(e)}
            />
            <CalculatorOperator
              id="calculator-multiply"
              text="*"
              handleAction={(e) => pushOperators(e)}
            />
            <CalculatorOperator
              id="calculator-divide"
              text="/"
              handleAction={(e) => pushOperators(e)}
            />
          </div>
          <div className="flex">
            <div>
              <div className="flex">
                <CalculatorDigit
                  id="calculator-seven"
                  text="7"
                  handleAction={() => pushDigits("7")}
                />
                <CalculatorDigit
                  id="calculator-eight"
                  text="8"
                  handleAction={() => pushDigits("8")}
                />
                <CalculatorDigit
                  id="calculator-nine"
                  text="9"
                  handleAction={() => pushDigits("9")}
                />
              </div>
              <div className="flex">
                <CalculatorDigit
                  id="calculator-four"
                  text="4"
                  handleAction={() => pushDigits("4")}
                />
                <CalculatorDigit
                  id="calculator-five"
                  text="5"
                  handleAction={() => pushDigits("5")}
                />
                <CalculatorDigit
                  id="calculator-six"
                  text="6"
                  handleAction={() => pushDigits("6")}
                />
              </div>
              <div className="flex">
                <CalculatorDigit
                  id="calculator-one"
                  text="1"
                  handleAction={() => pushDigits("1")}
                />
                <CalculatorDigit
                  id="calculator-two"
                  text="2"
                  handleAction={() => pushDigits("2")}
                />
                <CalculatorDigit
                  id="calculator-three"
                  text="3"
                  handleAction={() => pushDigits("3")}
                />
              </div>
              <div className="flex">
                <CalculatorDigit
                  id="calculator-zero"
                  text="0"
                  handleAction={() => pushDigits("0")}
                />
                <CalculatorOperator
                  id="calculator-floatpoint"
                  text="."
                  handleAction={() => convertFloatNumber()}
                />
                <CalculatorOperator
                  id="calculator-clear"
                  text="C"
                  handleAction={() => clearCalculator()}
                />
              </div>
            </div>
            <CalculatorOperator
              id="calculator-result"
              text="="
              handleAction={(e) => pushOperators(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
