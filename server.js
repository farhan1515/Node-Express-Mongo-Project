
const express = require("express");
const { errorhandler } = require("./middleware/errorhandler");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectdb()
const app = express();

const port = process.env.PORT || 8000;
// console.log(dotenv.parsed.PORT)
app.use(express.json())

app.use("/api/contacts", require("./routes/contactsRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorhandler)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})



