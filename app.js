import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  if (!employees.length) {
    return res.status(404).send({ message: "No employees available" });
  }

  const index = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[index];
  res.send(randomEmployee);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).send({ message: "Employee not found" });
  }

  res.send(employee);
});
