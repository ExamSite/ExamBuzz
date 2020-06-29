const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

var dbName = "GrrasProject"

const app = express();

app.use(cors());

// var client = new MongoClient( 'mongodb://localhost:27017/mypro', {useNewUrlParser:true});
// var client = new MongoClient('mongodb+srv://root:root@cluster.i5ume.gcp.mongodb.net/dbName?retryWrites=true&w=majority', { useNewUrlParser: true });
var client = new MongoClient('mongodb+srv://admin:admin@cluster0-c4rib.mongodb.net/dbName?retryWrites=true&w=majority', { useNewUrlParser: true });

var connection;
client.connect((err, con) => {
    if (!err) {
        connection = con;
        console.log("database connected successfully");
    }
    else {
        console.log("database could not connect");
    }
})

/*app.get('/', (req, res)=>{

    res.send({status:"ok", data:"this is a test api"});
})




app.get('/user', (req, res)=>{
    var id= req.query.id;
    res.send({status:"ok", data:[{name:"X", age:78, id:id},{name:"Y", age:67}]});
})*/


app.post('/sign-in', bodyParser.json(), (req, res) => {
    var collection = connection.db(dbName).collection('Users');
    collection.find(req.body).toArray((err,docs) => {
        if (!err && docs.length>0){
            res.send({ status: "ok", data:docs});
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})



app.post('/sign-up', bodyParser.json(), (req, res) => {
    var collection = connection.db(dbName).collection('Users');
    
    //collection.find({ email: req.body.email }).toArray((err, docs) => {
        // if(!err && docs.length>0)
        // {
        //     res.send({status:"failed", data:"email already Exist"})
        // }
        // else
        // {
        collection.insert(req.body, (err, result) => {
            if (!err) {
                res.send({ status: "ok", data: "signup success" });
            }
            else {
                res.send({ status: "failed", data: err });
            }
        })
        // }
    //})
})

app.post('/create-paper',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');
    // collection.find({examIdProp:req.body.examId}).toArray((err,docs)=>{
    //     if(!err && docs.length>0){
    //         // res.send({status:"failed",data:"not ofund"})
    //         console.log("hello")
    //     }
    // })

    // console.log(collection.find({examId:"asdf"}))
    console.log(req.body.examId) 
    collection.find({"examId":req.body.examId}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            console.log(docs)
            res.send({status:"failed",data:"asdf"})
        }
        else{
            collection.insert(req.body,(err,result)=>{
                if(!err){
                    res.send({status:"ok",data:"successfully gained your data"})
                }
                else{
                    res.send({status:"failed",data:err})
                }
            })

        }
    })
    // console.log(collection.findOne("examId":"asdf"))
    

    

})
app.post('/my-created-papers',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');

    collection.find({"email":req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            res.send({status:"ok",data:docs})
            console.log(docs)
        }
        else{
            console.log(docs)
            console.log(req.body.email)
            res.send({status:"lol",data:"he hi nhi"})
            console.log("not have any idea about me")
        }
    })

})


app.post('/submit-paper',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');
    // console.log(localStorage.getItem('examId'))
    collection.update({"examId":req.body.examId}, {$set:{questions:req.body.paper,time:req.body.time,date:req.body.date,duration:req.body.duration}}, (err,result)=>{
        if(!err ){
            // docs.push(req.body.paper)
            // console.log(docs)
            res.send({status:"ok",data:"got it "});
           
            
        }
        else{
            res.send({status:"failed",data:"could not insert questions"});
        }
    })

})

app.post('/show-paper-detail',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');
    console.log(req.body.examId)

    collection.find({"examId":req.body.examId}).toArray((err,docs)=>{
        console.log("printing exam id" + req.body.examId)
        if(!err && docs.length>0){
            res.send({status:"ok",data:docs[0].questions})
            console.log(docs[0].questions)
        }
        else{
            res.send({status:"failed",data:"bola na nhi mila"})
        }
    })

})


//join paper

app.post('/join-paper',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');
    collection.find({"examId":req.body.examId,"password":req.body.password}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            
            res.send({status:"ok",data:docs[0].questions})
            console.log(docs[0].questions)
        }
        else{
            res.send({status:"not ok",data:"nothing found "})
        }
    })

})
//fetching date time and duration from server
app.post('/date-time-duration-fetch',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection('Exams');
    collection.find({"examId":req.body.examId}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            
            res.send({status:"ok",data:docs[0]})
            console.log("debugginh docs of lol " + JSON.stringify(docs))
            console.log(docs.time + " " + docs.date + " " + docs.duration + docs.examName)
        }
        else{
            res.send({status:"not ok",data:"nothing found "})
        }
    })
})

//submitting answers
// app.post('submit-ans',bodyParser.json(),(req,res)=>{
//     var collection = connection.db(dbName).collection('Exams');

//     collection.update({"examId":req.body.examId},{$set:{students:{"name":req.body.name,"emailId":req.body.email,"submittedAns":req.body.ans}}}).toArray((err,docs)=>{

//     })

app.post('/submit-ans',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection("Exams");
    collection.update({"examId":req.body.examId},{$push:{students:{name:req.body.name,"email":req.body.email,"submittedAns":req.body.submittedAns,"marks":req.body.marks}}},(err,result)=>{
        if(!err){
            res.send({status:"ok",data:"got it"})
            console.log(req.body.name + " " + req.body.email + " " + req.body.examId + " " + req.body.ans + req.body.marks)
        }
        else{
            res.send({status:"did not get it ",data:"lol"})
        }
    })
})

//see and update profile

app.post('/see-update-profile',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection("Users")
    collection.find({Email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            res.send({status:"ok",data:docs[0]})
            console.log("docs are " + JSON.stringify(docs[0]))
        }
    })

})

app.post('/update-profile',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection("Users")
    var collection2 = connection.db(dbName).collection("Exams")

    collection.update({Email:req.body.email},{$set:{Name:req.body.name,Username:req.body.username,Mobile:req.body.mobile,Email:req.body.emailUp,Password:req.body.password}},(err,result)=>{
        if(!err){
            
            collection2.update({email:req.body.email},{$set:{email:req.body.emailUp}},(err,result)=>{
                if(!err){
                    res.send({status:"ok"})
                    console.log("this is running my baby and lets see what happens next" + req.body.emailUp)
                }
            })
        }
    })

})

app.post('/fetch-paper-details',bodyParser.json(),(req,res)=>{
    var collection = connection.db(dbName).collection("Exams")
    collection.find({"examId":req.body.examId}).toArray((err,docs)=>{
        if(!err && docs.length>0){
            res.send({status:"ok",data:docs[0]})
            console.log("from fetch paper details"+JSON.stringify(docs))
        }
        else{
            res.send({status:"not ok"})
            console.log("nhi mil rha bhai")
        }
    })
})

// app.post('/fetch-all-students',bodyParser.json(),(req,res)=>{
//     var collection = connection.db(dbName).collection("Exams");
//     collection.find({examId:req.body.examId}).toArray((err,docs)=>{
//         if(!err && docs.length>0){
//             res.send({status:"ok",data:docs[0]})
//         }
//     })
// })
app.listen(5000, () => { console.log("server is listining on port 5000") });