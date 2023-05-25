import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();

// Adding a middleware
app.use(express.json());

app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
    res.send("Assalamu Alaikum");
})


app.listen(8000, () => {
    console.log("Node server is started with typescript.");
});