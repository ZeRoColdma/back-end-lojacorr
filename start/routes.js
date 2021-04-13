"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", function ({ response }) {
  response.send("Serviço rodando, entre em contado com seu administrador.");
});

Route.group(() => {
  Route.resource("/users", "UserController").apiOnly();
});

Route.get("/session", "SessionController.index");
Route.post("/session", "SessionController.store");

Route.group(() => {
  Route.resource("/cep", "CepController").apiOnly();
}).middleware(["auth"]);
