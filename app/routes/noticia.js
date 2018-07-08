module.exports = function(app) {

    app.get('/noticia', function(req, res) {
        var connection = app.config.db_connection();
        var noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result) {
            res.render("noticias/noticia", { noticia: result });
        });

    });
};