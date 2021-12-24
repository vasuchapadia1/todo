import React from "react";
import { Grid, Typography } from "@mui/material";

const TaskList = (props) => {
  return (
    <Grid container>
      <ul>
        {props.tasks.map((task) => (
          <li key={Math.random()}>
            <Typography>{task.name}</Typography>
            <Typography>{task.id}</Typography>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default TaskList;
