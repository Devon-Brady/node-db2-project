const db = require('../../data/dbConfig');



function get(){
    return db('cars');
}


 module.exports ={
    get
}