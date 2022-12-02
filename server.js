//GET from UI, then make it post in node, 

const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());