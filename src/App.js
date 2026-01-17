import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("calc");
  const [display, setDisplay] = useState("0");
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [result, setResult] = useState("Ready for operation");

  const append = (val) => {
    setDisplay(display === "0" ? val : display + val);
  };

  const clearDisplay = () => setDisplay("0");

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* HEADER */}
      <h1 className="text-5xl font-display font-bold">String Ops</h1>
      <p className="text-gray-500 mb-6">
        Professional computing & text manipulation
      </p>

      {/* OUTER BOX */}
      <div className="border-4 border-black rounded-3xl p-6 w-full max-w-4xl">
        {/* DISPLAY */}
        <div className="border-2 border-black rounded-2xl p-4 mb-6">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-red-500 font-bold">CALC</span>
            <span className="text-gray-400">STR</span>
          </div>

          {mode === "calc" ? (
            <input
              className="w-full text-right text-4xl font-bold outline-none"
              value={display}
              readOnly
            />
          ) : (
            <div className="space-y-2">
              <input
                className="w-full border p-2 rounded"
                placeholder="String 1"
                value={str1}
                onChange={(e) => setStr1(e.target.value)}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="String 2"
                value={str2}
                onChange={(e) => setStr2(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* MODE BUTTONS */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setMode("calc")}
            className={`px-4 py-2 rounded-full border ${
              mode === "calc" ? "bg-black text-white" : ""
            }`}
          >
            Scientific
          </button>
          <button
            onClick={() => setMode("str")}
            className={`px-4 py-2 rounded-full border ${
              mode === "str" ? "bg-black text-white" : ""
            }`}
          >
            String Ops
          </button>
        </div>

        {/* PANELS */}
        {mode === "calc" ? (
          <div className="grid grid-cols-4 gap-3">
            <button className="bg-red-200 p-3 rounded" onClick={clearDisplay}>
              AC
            </button>
            <button
              className="bg-gray-200 p-3 rounded"
              onClick={() => setDisplay(display.slice(0, -1))}
            >
              DEL
            </button>
            <button className="bg-blue-200 p-3 rounded" onClick={() => append("/")}>
              ÷
            </button>
            <button className="bg-blue-200 p-3 rounded" onClick={() => append("*")}>
              ×
            </button>

            {[7, 8, 9, "-",
              4, 5, 6, "+",
              1, 2, 3].map((v) => (
              <button
                key={v}
                className="border p-3 rounded"
                onClick={() => append(v.toString())}
              >
                {v}
              </button>
            ))}

            <button className="col-span-2 border p-3 rounded" onClick={() => append("0")}>
              0
            </button>
            <button className="border p-3 rounded" onClick={() => append(".")}>
              .
            </button>
            <button
              className="bg-red-400 text-white p-3 rounded"
              onClick={calculate}
            >
              =
            </button>
          </div>
        ) : (
          <>
            <div className="border p-3 rounded mb-3">{result}</div>
            <div className="grid grid-cols-2 gap-3">
              <button
                className="border p-2"
                onClick={() => setResult("Length: " + str1.length)}
              >
                length()
              </button>
              <button
                className="border p-2"
                onClick={() =>
                  setResult("Reverse: " + str1.split("").reverse().join(""))
                }
              >
                reverse()
              </button>
              <button
                className="border p-2"
                onClick={() => setResult("Result: " + str1 + str2)}
              >
                concat()
              </button>
              <button
                className="border p-2"
                onClick={() =>
                  setResult(str1 === str2 ? "Equal" : "Not Equal")
                }
              >
                compare()
              </button>
            </div>
          </>
        )}
      </div>

      
      </div>
    
  );
}
