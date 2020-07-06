import express from "express";

const app = express();

app.get("/*", (_req, res) => {
  console.log("Ping!");
  res.send("Ping!");
});

app.listen({ port: 3000 }, () => {
  console.clear();
  console.log("Server running at the specified port.");
});
