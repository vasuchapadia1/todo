import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Form = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskId, setTaskId] = useState("");

  const taskHandleChange = (event) => {
    setTaskName(event.target.value);
  };
  const taskIdHandleChange = (event) => {
    setTaskId(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (taskName.trim().length === 0 || taskId.trim().length === 0) {
      return;
    } else if (Number(taskId) < 1) {
      return;
    } else if (!Number(taskId)) {
      return;
    }
    setTaskName("");
    setTaskId("");
    // console.log(taskName, taskId);
    props.onAddTask(taskName, taskId);
  };
  return (
    <div
      style={{
        marginLeft: 200,
        marginRight: 200,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card style={{ width: "auto", margin: 50 }}>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          style={{
            margin: 15,
          }}
          helperText="Please enter Task Name"
          onChange={taskHandleChange}
          value={taskName}
        />
        <TextField
          id="outlined-basic"
          label="Task-ID"
          variant="outlined"
          style={{
            margin: 15,
          }}
          helperText="Please enter Task ID"
          onChange={taskIdHandleChange}
          value={taskId}
        />
        <Button variant="contained" onClick={handleClick}>
          Add Task
        </Button>
      </Card>
    </div>
  );
};

export default Form;
