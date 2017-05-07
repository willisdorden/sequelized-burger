var db = require("../models/index");



module.exports = function(app) {

        app.get("/", function (req, res) {
            db.burgers.findAll({}).then(function (dbburgers) {
                var returnburger = {burgers: dbburgers};
                console.log(returnburger);
                res.render('index',returnburger);
    })
});
        app.post("/", function(req, res) {
            db.burgers.create({
                burger_name: req.body.burger
            }).then(function(dbburgers){
                res.redirect('/');
        });
});
        app.put("/:id",function(req,res){
            db.burgers.update({
                devoured: true
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(function(dbburgers) {
                    res.redirect('/');

                });

        });
            app.delete("/:id",function(req,res){
                db.burgers.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function(dbburgers) {
                        res.redirect('/');

                    });
            });

};