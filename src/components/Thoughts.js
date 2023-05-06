import React, { useState, useEffect, useRef } from "react";
import { CssBaseline, Typography, TextField, Button } from "@mui/material";
import "./styles/Thoughts.css";
//
const Thoughts = () => {
  // assigning inputs to variable
  const typedThoughtsRef = useRef();

  // getting the date
  let currentDate = new Date().toLocaleDateString();
  // get time
  let today = new Date();
  let currentTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // date and time
  const dateTime = `${currentDate}  ${currentTime}`;
  console.log(dateTime);

  // get items from localstorage
  const localthoughtslist = localStorage.getItem("thoughtsToday");

  const savedThoughts = localthoughtslist ? JSON.parse(localthoughtslist) : [];

  // state
  const [thoughtsList, setThoughtsList] = useState([]);

  // form submit FUNCTION--
  const onFormSubmit = (e) => {
    e.preventDefault();

    const thoughtsInfo = {
      date: dateTime,
      writtenThoughts: typedThoughtsRef.current.value,
    };
    setThoughtsList([...thoughtsList, thoughtsInfo]);
  };
  // end of function--

  // will render immediate to avoid repeating submit
  useEffect(() => {
    // saving in localstorage
    localStorage.setItem("thoughtsToday", JSON.stringify(thoughtsList));

    console.log(thoughtsList);
  }, [thoughtsList]);

  const renderFromLocalStorage = thoughtsList.map((list, index) => {
    return (
      <div key={index} className="Parent">
        <h6>{list.date}</h6>
        <p>{list.writtenThoughts}</p>
      </div>
    );
  });
  return (
    <div className="thougths">
      <CssBaseline />
      <h3>Thoughts</h3>

      {/* form  Paper-component="form" */}
      <div className="form-container">
        <form className="form" onSubmit={onFormSubmit}>
          <h4>What's on your Mind Today? </h4>
          <TextField
            required
            id="outlined-multiline-static"
            label="Enter Your Thougths"
            multiline
            rows={3}
            inputRef={typedThoughtsRef}
            fullWidth
          />
          <div className="btn">
            <Button
              className="btn"
              variant="contained"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      {/* bottom part */}
      <div className="bottom">{renderFromLocalStorage}</div>
    </div>
  );
};

export default Thoughts;
