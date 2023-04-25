const express = require("express")

const app = express()
app.use(express.static("public"))
app.use("/api/users", (req, res) => {
    res.json({
        message: "user fetch success"
    })
})

app.use("*", (req, res) => {
    res.sendFile("public/index.html")
})

app.listen(precess.env.PORT || 5000, console.log("running"))