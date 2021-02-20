import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "../card/Card";
import Addtask from "../addcard/Addtask";

export default function CardContainer() {
  const [query, setQuery] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [error, setError] = useState(false);
  const getdata = () => {
    axios
      .get(`http://localhost:8000/task`)
      .then((result) => {
        setTasks(result.data);
        console.log("njarb", result);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleAddTask = async () => {
    const newTask = { title: query };
    const result = await axios.post("http://localhost:8000/task", newTask);
    setTasks((tasks) => [...tasks, result.data]);
    console.log("a", result);
  };

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:8000/task/${id}`);
    tasks.filter((index) => index._id !== id);
    setTasks((tasks) => tasks.filter((index) => index._id !== id));
    console.log("testt", tasks, id);
  };
  const handleEditTask = (id) => {
    const editTask = { title: editedTask };

    axios.patch(`http://localhost:8000/task/${id}`, editTask);

    setTasks((tasks) =>
      tasks.map((element) => {
        if (element._id === id) return { ...element, title: editedTask };
        return element;
      })
    );
    console.log("njarb2", editedTask, id);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleEdit = (e) => {
    setEditedTask(e.target.value);
  };
  return (
    <div className="App">
      {error ? (
        <h1>something went wrong </h1>
      ) : (
        <div>
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Typography
                component="div"
                style={{ backgroundColor: "#F1F1F1", height: "100vh" }}
              >
                <Addtask
                  handleChange={handleChange}
                  value={query}
                  handlePress={handleAddTask}
                />
                {tasks.map((task) => (
                  <Card
                    id={task._id}
                    title={task.title}
                    handleDeleteTask={handleDeleteTask}
                    handleEditTask={handleEditTask}
                    value={editedTask}
                    handleChange={handleEdit}
                  />
                ))}
              </Typography>
            </Container>
          </React.Fragment>
        </div>
      )}
    </div>
  );
}
