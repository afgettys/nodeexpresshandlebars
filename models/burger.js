var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb){
        orm.selectAll("burgers",function (res){
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb){
        orm.insertOne("burgers", cols, vals,function(res){
            cb(res);
        });
    },

    updateOne: function (cols,vals, condition, cb){
        orm.updateOne("burgers","devoured",value,function(res){
            cb(res);
        });
    }
};

module.exports = burguer