import React, { useEffect, useState } from "react";

export function Typespeed() {
  const [text, setText] = useState("");
  const [starttime, setstarttime] = useState(null);
  const [speed, setspeed] = useState("");

  useEffect(() => {
    if (text.length == 0) {
      setspeed(0);
    }
    if (text.length == 1) {
      setstarttime(Date.now());
    }
    if (text.length >= 1) {
      const elapsedtime = (Date.now() - starttime) / 1000;
      setspeed(text.length / elapsedtime.toFixed(2));
    }
  }, [text]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>Speed: {speed} characters per second</h3>
    </>
  );
}
