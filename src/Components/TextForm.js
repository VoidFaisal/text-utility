import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("hola"+text);
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.alert("no text to convert", "warning");
    } else {
      props.alert("Text has converted to uppercase", "success");
    }
  };
  const handleEmailClick = () => {
    const extractEmails = (text) => {
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      const matches = text.match(emailRegex);
      return matches || [];
    };

    const emails = extractEmails(text);
    setText(emails.join(", ")); // Join emails with comma and space for display
    if (text === "" || emails.length === 0) {
      props.alert("no emails to be extracted", "warning");
    } else {
      props.alert("Emails have been extracted", "success");
    }
  };
  const handleLoClick = () => {
    // console.log("hola"+text);
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.alert("no text to convert", "warning");
    } else {
      props.alert("Text has converted to uppercase", "success");
    }
  };
  const handleOnChange = (event) => {
    // console.log("uppercasewasclicked");
    setText(event.target.value);
  };
  const countWordsAndCharacters = (text) => {
    // Split the text by whitespace characters
    const wordsArray = text.split(/\s+/);
    // Filter out empty strings and count the non-empty words
    const nonEmptyWordsCount = wordsArray.filter(
      (word) => word.trim() !== ""
    ).length;
    // Join the words back together without spaces to count characters
    const joinedText = wordsArray.join("");
    return { words: nonEmptyWordsCount, characters: joinedText.length };
  };

  const [text, setText] = useState("");
  const { words, characters } = countWordsAndCharacters(text);
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#766dd3" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#FFFFFF" : "#766dd3",
              color: props.mode === "light" ? "#766dd3" : "#FFFFFF",
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleEmailClick}>
          Find Email
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#766dd3" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {words} words and {characters} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in above textbox to preview"}
        </p>
      </div>
    </>
  );
}
