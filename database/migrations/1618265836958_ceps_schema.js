"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CepsSchema extends Schema {
  up() {
    this.create("ceps", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table.string("cep");
      table.string("logradouro");
      table.string("complemento");
      table.string("bairro");
      table.string("localidade");
      table.string("uf");
      table.string("ibge");
      table.string("gia");
      table.string("ddd");
      table.string("siafi");
      table.timestamps();
    });
  }

  down() {
    this.drop("ceps");
  }
}

module.exports = CepsSchema;
