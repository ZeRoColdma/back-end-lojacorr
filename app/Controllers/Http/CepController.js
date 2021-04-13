"use strict";

const Cep = use("App/Models/Cep");
const axios = use("axios");

class CepController {
  async index({ auth }) {
    const ceps = await Cep.query().with("user").fetch();
    const userId = auth.user.id;

    return { ceps, userId };
  }

  async store({ request, response, auth }) {
    try {
      const cep = request.input("cep");

      let data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      let dados = data.data;

      const dataCep = await Cep.create({ ...dados, user_id: auth.user.id });
      const user_id = auth.user.id;
      return { dataCep, user_id: user_id };
    } catch (error) {
      const { detail } = error;
      return response.send({ error: detail });
    }
  }

  async show({ params }) {
    const dataCep = await Cep.findOrFail(params.id);

    await dataCep.load("user");

    return dataCep;
  }

  async update({ params, request }) {
    const cep = await Cep.findOrFail(params.id);
    const data = request.all();

    cep.merge(data);

    await cep.save();

    return cep;
  }

  async destroy({ params }) {
    const cep = await Cep.findOrFail(params.id);

    await cep.delete();
  }
}

module.exports = CepController;
