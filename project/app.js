require("babel-register");

const express = require("express")
const morgan = require("morgan")
const app = express();

const ROOT_API = '/api/v1/'

const members = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Thomas'
    }, 
    {
        id: 3,
        name: 'Aurélien'
    },
    {
        id: 4,
        name: 'Mélanie'
    }
]

app.use(morgan('dev'))

app.get(ROOT_API + 'members', (req, res) => {
    res.send(members)
})
app.get(ROOT_API + 'members/:id', (req, res) => {
    res.send(members[req.params.id])
})

app.listen(8080, () => 
    console.log("App started on port 8080")
)
