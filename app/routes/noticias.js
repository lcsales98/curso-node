module.exports = function(app) {

    app.get('/noticias', function(req, res) {
        var connection = app.config.db_connection();
        var noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result) {
            res.render("noticias/noticias", { noticias: result });
        });

    });
};