"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request }) {
    const data = await User.all();
    return data;
  }

  async store({ request, response }) {
    try {
      const data = request.only(["email", "password", "username"]);
      const user = await User.create(data);
      return user;
    } catch (error) {
      const { detail } = error;
      return response.send({ error: detail });
    }
  }

  async show({ params }) {
    const dataUser = await User.findOrFail(params.id);
    await dataUser.load("user");
    return dataUser;
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const data = request.only(["username", "email", "password"]);
    user.merge(data);
    await user.save();
    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }
}

module.exports = UserController;
