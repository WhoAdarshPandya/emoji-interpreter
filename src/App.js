import "./App.css";
import { TextField, MuiThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { theme } from "./theme/theme";

const emojis = [
  { emoji: "🚣", desc: "Person Rowing Boat" },
  { emoji: "🗾", desc: "Map of Japan" },
  { emoji: "🏔️", desc: "Snow-Capped Mountain" },
  { emoji: "🌋", desc: "Volcano" },
  { emoji: "🗻", desc: "Mount Fuji" },
  { emoji: "🏥", desc: "Hospital" },
  { emoji: "🗼", desc: "Tokyo Tower" },
  { emoji: "🗽", desc: "Statue of Liberty" },
  { emoji: "⛩️", desc: "Shinto Shrine" },
];

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Search emoji's meaning");

  const onEmojiClickHandler = (inputEmoji) => {
    setEmoji(inputEmoji.emoji);
    setMeaning(inputEmoji.desc);
  };

  const emojiChangeHandler = (e) => {
    const actualEmoji = e.target.value;
    setEmoji(actualEmoji);
    let emojiData = emojis.filter((emoji) => emoji.emoji === actualEmoji);
    if (emojiData.length > 0) {
      console.log(emojiData);
      setMeaning(emojiData[0].desc);
    } else {
      setMeaning("emoji is not recognized");
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <h2>Search Emoji</h2>
        <div className="input">
          <TextField
            id="outlined-basic"
            label="Search emoji"
            variant="outlined"
            value={emoji}
            onChange={emojiChangeHandler}
          />
          <br />
        </div>
        <h3>{emoji}</h3>
        <h3>{meaning}</h3>
        {emojis.map((emj) => (
          <span
            key={emj.desc}
            className="emoji"
            onClick={() => onEmojiClickHandler(emj)}
          >
            {" "}
            {emj.emoji}{" "}
          </span>
        ))}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
