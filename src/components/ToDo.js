import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  Box,
  Card,
  CssBaseline,
  CardActions,
  CardContent,
  TextField,
  Container,
  Button,
} from "@mui/material";
import "./styles/ToDo.css";

import Typography from "@mui/material/Typography";

const ToDo = () => {
  // get from localStorage
  const getItems = localStorage.getItem("localName");
  //
  const condition = getItems ? JSON.parse(getItems) : [];

  const toDoFieldRef = useRef();

  const [taskState, setTaskState] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const toSavedTask = {
      date: document.getElementById("date").value,
      task: toDoFieldRef.current.value,
    };
    setTaskState([...taskState, toSavedTask]);
  };

  useEffect(() => {
    // save to localStorage
    localStorage.setItem("localName", JSON.stringify(taskState));
  }, [taskState]);

  const render = taskState.map((task, index) => {
    return (
      <div className="task">
        <Paper
          elevation={24}
          variant="outlined"
          sx={{ maxWidth: 525, height: 150, mx: 5, px: 1, mb: 2 }}
          key={index}
        >
          <h5>Will finish on: {task.date}</h5>
          <div>
            Task: <p>{task.task}</p>
          </div>
        </Paper>
      </div>
    );
  });

  return (
    <div className="container">
      <CssBaseline />
      <div className="top">
        <Card
          className="card"
          sx={{
            maxWidth: 525,
            height: 250,
            pt: 20,
            backgroundColor: "#ade8f4",
          }}
          component="form"
          onSubmit={onFormSubmit}
        >
          <CardContent>
            <Container>
              <Typography variant="h5" align="center">
                Add New Task:
              </Typography>
            </Container>
            {/* Date Picker */}

            <input type="datetime-local" id="date" required />
            {/* Text Field */}
            <TextField
              className="toDo-text"
              id="toDoField"
              label="Enter your New Task"
              multiline
              rows={3}
              sx={{ mt: 2 }}
              inputRef={toDoFieldRef}
              fullWidth
              required
            />
          </CardContent>
          <CardActions>
            {/* Button Submit */}
            <Button
              variant="contained"
              sx={{ mb: 20, mt: -2 }}
              fullWidth
              color="success"
              type="submit"
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="bot">{render}</div>
    </div>
  );
};

export default ToDo;
