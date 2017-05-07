var db = require("../models");



module.exports = function(app) {

        app.get("/", function (req, res) {
            db.burgers.findAll({}).then(function (dbburgers) {
                res.json(dbburgers);
    })
});
        app.post("/", function(req, res) {
            db.burgers.create({
                burger_name: req.body.burger
            }).then(function(dbburgers){
                res.json(dbburgers);
        });
});
        app.put("/:id",function(req,res){
            db.burgers.update({
                burger_name: req.body.burger
            }, {
                where: {
                    id: req.body.id
                }
            })
                .then(function(dbburgers) {
                    res.json(dbburgers);
                });

        });
            app.delete("/:id",function(req,res){
                db.burgers.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function(dbburgers) {
                        res.json(dbburgers);
                    });
            });

};