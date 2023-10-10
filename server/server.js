const express = require('express')
const cors = require('cors')
const app = express()
const mg = require('mongoose')
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser')
const store = require("./store")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
app.use(cors())
mg.connect("mongodb://0.0.0.0:27017/student").then(e => { console.log('DB connected') }).catch(e => { console.log(e) })


const userSchema = new mg.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profilePic: {
        type: String,
    },
    workouts: [
        {
            title: { type: String },
            details: [
                {   
                    uid:{type:String},
                    exercise: { type: String },
                    sets: { type: String }
                }
            ]
        }
    ]

})



const userCol = new mg.model('Login_proj', userSchema)

app.post('/api', urlencodedParser, (req, res) => {
    result = req.body

    userCol.findOne({ name: result.name })
        .then((data) => {
            if (data) {
                res.send('user already exist')
            }
            else {
                insertdata()
            }
        })
    const insertdata = async () => {
        await userCol.insertMany([result])
        await userCol.findOne({ name: result.name })
            .then((data) => {
                store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                res.send(data)
            })
    }


})
app.post('/getData', urlencodedParser, (req, res) => {
    result = req.body

    userCol.findOne({ name: result.name, password: result.password })
        .then((data) => {
            if (data) {
                store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                store.getState().data
                res.send(data)
            }
            else {
                res.send("User Not found")
            }
        })
})

app.post('/updateProfile', urlencodedParser, (req, res) => {
    const result = req.body

    userCol.updateOne({ name: store.getState().data.name }, { name: result.name, email: result.email })
        .then((data) => {
            userCol.findOne({ name: result.name })
                .then((data) => {
                    store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                    res.send(data)
                })
        })
        .catch((e) => {
            console.log(e)
            res.send('Something went wrong')
        })
})
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../personal/public/ProfilePics')
    }, filename: (req, file, cb) => {
        cb(null, store.getState().data.name + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


app.post('/UploadPic', upload.single("file"), (req, res) => {
    var newPicName = store.getState().data.name + path.extname(req.file.originalname)
    userCol.updateOne({ name:store.getState().data.name  }, { profilePic: newPicName })
        .then((data) => {
            userCol.findOne({ name: { $in: [store.getState().data.name.toString()] } })
                .then((data) => {
                    if (data) {
                        store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                        res.send(data)
                    }
                    else {
                        res.send("User Not found")
                    }
                })
        })
        .catch((e) => {
            res.send('Error happend')
        })

})

app.post('/WorkoutUpdate', urlencodedParser, (req, res) => {
    const result = req.body
    userCol.updateOne({ name: store.getState().data.name }, { workouts: [ ...store.getState().data.workouts,result] })
        .then((data) => {
            userCol.findOne({ name: store.getState().data.name })
                .then((data) => {
                    store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                    res.send(data)
                })
        })
        .catch((e) => {
            console.log(e)
            res.send('Something went wrong')
        })
})

app.post('/WorkoutUpdateDetails', urlencodedParser, (req, res) => {
    const result = req.body
    store.dispatch({type:"FILTER_WORKOUTS", payload:result})
    userCol.updateOne({ name: store.getState().data.name  }, { name:store.getState().data.name, email: store.   getState().data.email, password:store.getState().data.password, profilePic:store.getState().data.profilePic,workouts: store.getState().data.workouts })
        .then((data) => {
            userCol.findOne({ name: store.getState().data.name })
                .then((data) => {
                    store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                    res.send(data)
                })
        })
        .catch((e) => {
            console.log(e)
            res.send('Something went wrong')
        })
})

app.post('/WorkoutUpdateDelete', urlencodedParser, (req, res) => {
    const result = req.body
    userCol.updateOne({ name: store.getState().data.name }, { $pull:{ workouts:{title:result.title}} })
        .then((data) => {
            userCol.findOne({ name: store.getState().data.name })
                .then((data) => {
                    store.dispatch({ type: "CHANGE_USERDATA", payload: data })
                    res.send(data)
                })
        })
        .catch((e) => {
            console.log(e)
            res.send('Something went wrong')
        })
})

app.listen(5000, () => { console.log(' the server is running on 5000 port') })   