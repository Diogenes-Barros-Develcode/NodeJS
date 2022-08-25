import express from "express";
import privacyRoutes from "./privacy.routes";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            message: 'Hello World'
        });
    })

    app.use(
        express.json(),
        privacyRoutes
    )
}

export {routes}