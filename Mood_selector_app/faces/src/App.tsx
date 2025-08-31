import { useState } from "react";

function App() {
  const [CurrentMood, SetCurrentMood] = useState("😐 Neutral");
  const [MoodHistory, setMoodHistory] = useState<string[]>([]);
  const [showHistory, setshowHistory] = useState(false);
  const [moodeCount , setMoodCount] = useState({happy:0, sad:0, angry:0})

  function Happy() {
    const newMood = "😀 Happy";
    SetCurrentMood(newMood);
    setMoodHistory([newMood, ...MoodHistory].slice(0, 3));
    setMoodCount({...moodeCount, happy: moodeCount.happy + 1})
  }
  function Sad() {
    const newMood = "Sad 😢";
    SetCurrentMood(newMood);
    setMoodHistory([newMood, ...MoodHistory].slice(0, 3));
    setMoodCount({...moodeCount, sad:moodeCount.sad +1})
  }
  function Angry() {
    SetCurrentMood("Angry 😡");
    setMoodHistory(["Angry 😡", ...MoodHistory].slice(0, 3));
    setMoodCount({...moodeCount,angry:moodeCount.angry+1})
  }

  function toogelHistory() {
    if (!showHistory) {
      setshowHistory(true);
      return;
    }
    setshowHistory(false);
  }

  return (
    <div>
      <button onClick={Happy}>Happy 😀</button>
      <button onClick={Sad}>Sad 😢</button>
      <button onClick={Angry}>Angry 😡</button>
      <p>Current Mood: {CurrentMood}</p>
      <h2>Mood History:</h2>

      <button onClick={toogelHistory}>
        {showHistory ? "Hide History" : "Show History"}
      </button>

      {showHistory && (
        <ul>
          {MoodHistory.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      )}

      <ul>
        <li>{moodeCount.happy}</li>
        <li>{moodeCount.sad}</li>
        <li>{moodeCount.angry}</li>
      </ul>
    </div>
  );
}

export default App;
