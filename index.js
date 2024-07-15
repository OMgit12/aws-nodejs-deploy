const express = require("express")

const app  = express()

app.get("/", (req,res)=> {
    res.json({
        status: true,
        massage: "all good"
    })
})


app.listen(8000 ,()=> {
    console.log("app Listen on the port no 8000")
})

