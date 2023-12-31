
const { User } = require('../db');
require('dotenv').config();

module.exports = {
  Users: async (req, res) => {

    try {
      const users = await User.findAll()
      console.log("Todos los usuarios registrados");
      res.status(200).send(users)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
