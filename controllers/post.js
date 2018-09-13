'use strict'
var db = require('../conection');


function getPost(req, res, next) {

    var url='SELECT * FROM post';
    db.any(url).then(function (data) {
        res.status(200).send(data)    
    })
    .catch(function (error) {
        res.status(403).send({'msg':'error'}) 
    });
}


function insertPost(req, res) {

    var params = req.body;

    if(params.name && params.description){
        db.one('INSERT INTO post (name,description) VALUES ($1,$2) RETURNING id, name, description',[params.name,params.description])
        .then(data=>{
            res.status(200).send(data);
        })
        .catch(error=>{
            res.status(400).send({'msg':error});
        })
    }else{
        res.status(403).send({'msg':'params not found'});
    }
    
}

function updatePost(req, res) {

    var params = req.body;
    if(params.id && params.description && params.name){
        db.one('UPDATE post SET name=$2, description=$3 WHERE id=$1 RETURNING id, name, description',[params.id,params.name,params.description])
        .then(data=>{
            res.status(200).send({'data':data});
        })
        .catch(error=>{
            res.status(400).send({'msg':error});
        })
    }else{
        res.status(403).send({'msg':'params not found'});
    }

}

function deletePost(req, res, next) {
    if(req.params.id){
        db.one('DELETE FROM post WHERE id=$1 RETURNING id, name, description',[req.params.id])
        .then(data=>{
            res.status(200).send(data);
        })
        .catch(error=>{
            res.status(400).send({'msg':error});
        })
    }else{
        res.status(403).send({'msg':'params not found'});
    }
}



module.exports = {
    getPost,
    insertPost,
    updatePost,
    deletePost
};