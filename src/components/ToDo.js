import { Grid } from "@mui/material";
import React from "react";
import Form from "./TaskForm";
const Task = (props) => {
  return (
    <div>
      {/* <h1 style={{ color: "black" }}>To-Do List</h1> */}
      <Grid container>
        <Form />
      </Grid>
    </div>
  );
};

export default Task;
