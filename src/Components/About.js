import React, { useState } from "react";

export default function About() {
  const [toggle, setToggle] = useState("Toggle Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  let ChangeMode = () => {
    if (toggle === "Toggle Dark Mode") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });

      setToggle("Toggle Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setToggle("Toggle Dark Mode");
    }
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h1>About</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-success" onClick={ChangeMode}>
          {toggle}
        </button>
      </div>
    </>
  );
}
