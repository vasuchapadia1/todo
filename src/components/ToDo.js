import React, { useState } from "react";
import { Grid } from "@mui/material";
import Form from "./TaskForm";
import TaskList from "./TaskList";

const Task = (props) => {
  const [taskList, setTaskList] = useState([]);
  const addTaskHandler = (name, id) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { name: name, id: id }];
    });
  };
  return (
    <div>
      {/* <h1 style={{ color: "black" }}>To-Do List</h1> */}
      <Grid container>
        <Form onAddTask={addTaskHandler} />
        <TaskList tasks={taskList} />
      </Grid>
    </div>
  );
};

export default Task;
