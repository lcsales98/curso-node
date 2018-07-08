module.exports = function(app) {
    app.get('/form_add_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        var moment = require('moment');

        req.assert('titulo', 'O título é obrigatório!').notEmpty();
        req.assert('resumo', 'O resumo é obrigatório!').notEmpty();
        req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres!').len(10, 100);
        req.assert('noticia', 'A noticia é obrigatória!').notEmpty();
        req.assert('autor_nome', 'O autor é obrigatório!').notEmpty();
        req.assert('data_noticia', 'A data é obrigatória!').notEmpty();

        var erros = req.validationErrors();
        var isValidDate = moment(noticia.data_noticia, "YYYY-MM-DD").isValid();

        console.log(erros);
        console.log(isValidDate);

        if (erros) {
            res.render("admin/form_add_noticia");
            return;
        }

        // Se a data não é válida acrescenta no JSON de validationErros a mensagem 
        // de erro pois ele retornará para o formulário para mostrar o que houve
        if (!isValidDate) {
            validationErrors.push({
                location: 'body',
                param: 'data_noticia',
                msg: 'A data da notícia deve estar no formato DD-MM-AAAA!',
                value: ''
            });
        }
        var connection = app.config.db_connection();
        var noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.insertNoticia(noticia, function(error, result) {
            res.redirect("/noticias");
        });
    });
};