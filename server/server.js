const express = require('express');
const cors = require('cors');
const path = require('path'); // Provides file path manipulation

const app = express();
app.use(cors());
app.use(express.json());


//Middleware 
//Use either middleware or endpoints NOT BOTH
app.use(express.static(path.join(__dirname, "../public")))

app.use(express.static("/images", path.join(__dirname, "../images")))

//Endpoints
//Use this endpoint to host pictures
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public"))
// })

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// });

// app.get("/styles", function(req,res) {
//     res.sendFile(path.join(__dirname, "../public/index.css"))
// });

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});