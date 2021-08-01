const express = require("express");
const app = express();
const allRoutes = require("./routes");

// It parses incoming requests with JSON payloads
app.use(express.json());

// Applying All Routes
app.use(allRoutes);

// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(4000, () => console.log("Server is running on port 4000"));