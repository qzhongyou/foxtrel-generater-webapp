class Middleware {
    notFound(req, res, next) {
        res.status(404).render('errors/not-found')
    }

    Error500(err, req, res, next) {
        res.status(500).send(err);
    }
}

export default Middleware;
