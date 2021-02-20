import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./add.css";
export default function Addtask({ handleChange, value, handlePress }) {
  return (
    <div className="line">
      <TextField
        id="standard-basic"
        label="Standard"
        type="text"
        className="text"
        placeholder="new task"
        onChange={handleChange}
        value={value}
      />
      <Button
        className="addbutton"
        variant="contained"
        color="primary"
        onClick={handlePress}
      >
        Add
      </Button>
    </div>
  );
}
