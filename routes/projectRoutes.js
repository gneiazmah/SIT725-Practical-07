var express = require("express")
var router = express.Router();
//let client = require("../dbConnect");
let projectCollection;
let controller = require("../controller")

// setTimeout(() =>{
//     projectCollection = client.mongoClient.db().collection("Project")
// },2000)

// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

router.post('/',(req,res) => {
    controller.createProjects(req,res)
    // console.log("New Project added", req.body)
    // var newProject = req.body;

    // insertProjects(newProject,(err,result) => {
    //     if(err) {
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else {
    //         res.json({statusCode: 200, message:"Project Successfully added", data: result})
    //         }
    // })
})

// const getProjects = (callback) => {
//     projectCollection.find({}),toArray(callback);
// }

router.get('/',(req,res) => {
    controller.retrieveProjects(req,res)
    // getProjects((err, result) => {
    //     if(err){
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else{
    //         res.json({statusCode: 200, message: "Success", data: result})
    //     }
    // })

})

module.exports = router;
