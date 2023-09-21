import "./App.css";
import { useState } from "react";

const getRandomNumber = () => Math.random() * 1000 | 0

const steps = [
  {
    title: "Start with the Rightmost Digit (Units Place)",
    detail: "Look at the digits in the units place for both numbers."
  }
]

const HighlightChar = ({ text, index }: { text: string; index: number }) =>
  <div>{text.split('').map((char, i) =>
    <span className={i === index ? "bg-yellow-300 p-[2px]" : ""}>{char}</span>
  )}</div>



function App() {
  const [firstNumber, setFirstNumber] = useState(String(getRandomNumber()));
  const [secondNumber, setSecondNumber] = useState(String(getRandomNumber()));
  const [curStep, setCurStep] = useState(0);
  const content = `${firstNumber.padStart(5, ' ')}\n+${secondNumber.padStart(4, ' ')}`
  const firstString = String(firstNumber);
  const firstStringPadded = firstString.padStart(4, ' ');
  const secondString = String(secondNumber);
  const secondStringPadded = '+' +secondString.padStart(3, ' ');

  const step = steps[curStep];

  return (
    <div className="w-full h-screen h-full flex flex-col justify-center items-center space-y-4">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold">{step.title}</div>
        <div >{step.detail}</div>
      </div>
      <div className="border-b border-black w-[3rem] block font-mono">
      <pre>
      <HighlightChar text={firstStringPadded} index={firstStringPadded.length - 1} />
      <HighlightChar text={secondStringPadded} index={secondStringPadded.length - 1} />
      </pre>
      </div>
    </div>
  );
}

export default App;
