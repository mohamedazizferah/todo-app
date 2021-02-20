import React from "react";
import "./card.css";
import Button from "@material-ui/core/Button";
import EditButton from "../editcard/edit";

const Cards = (props) => {
  return (
    <div className="cardcontour">
      <div className="Card">
        <div className="title">{props.title}</div>
        <div className="buttons">
          <EditButton
            handleEditTask={() => props.handleEditTask(props.id)}
            handleChange={props.handleChange}
            value={props.value}
          />
          <Button
            className="deletebutton"
            variant="contained"
            color="secondary"
            onClick={() => props.handleDeleteTask(props.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
