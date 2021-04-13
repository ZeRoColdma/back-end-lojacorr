"use strict";

const User = use("App/Models/User");

class SessionController {
  async index() {
    const data = await User.all();

    return data;
  }

  async store({ request, auth }) {
    const { email, password } = request.only(["email", "password"]);

    const token = await auth.attempt(email, password);
    const user = await User.findBy("email", email);
    const user_id = user.id;

    return { user_id, token };
  }
}

module.exports = SessionController;
