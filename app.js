const express = require("express");
const cors = require("cors");
const router = require("./src/router");
const errorMiddleware = require("./src/middlewares/error");
const { PORT } = require("./src/config/config");
const bodyParser = require('body-parser')
const swaggerJSDoc = require("swagger-jsdoc");
const options = {
  swaggerDefinition: {
    info: {
      title: "My API",
      version: "1.0.0",
      description: "My API with Swagger",
    },
  },
  apis: ["./src/swagger.yaml"],
};
const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require("swagger-ui-express");

const app = express();
require("dotenv").config();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Enable cors
app.use(cors());

// Disable x-powered-by header
app.disable("x-powered-by");

// Healthcheck
app.get("/health", (req, res) => {
  res.status(200).send("health");
});

// Set default Content-Type
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});

// API routes
app.use("/", router);

//error middleware
app.use(errorMiddleware);

module.exports = app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}`);
});
