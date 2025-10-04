import { useState, useEffect } from "react";
import "./App.css";
import Reel from "./Reel";
import type { ReelData } from "./types";

function App() {
  const [pages, setPages] = useState<ReelData[]>([]);

  useEffect(() => {
    const API_PATH = "http://127.0.0.1:5050/reels";
    fetch(API_PATH)
      .then((res) => res.json())
      .then((data) => {
        setPages(data);
      });
  }, []);

  return (
    <div className="reel-container">
      {pages.map((page) => (
        <Reel
          key={page.url}
          title={page.title}
          image={page.image}
          text={page.text}
          url={page.url}
          shortenedText={page.shortened_text}
        />
      ))}
    </div>
  );
}

export default App;
