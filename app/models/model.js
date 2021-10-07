const pool = require("../config/config.js");

module.exports = {
  createContacts: (body) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO "Contacts" (first_name, last_name, phone_number, email) VALUES ($1, $2, $3, $4);`;

      pool
        .query(query, Object.values(body))
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getAllContacts: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM "Contacts" ORDER BY id`;

      pool
        .query(query)
        .then((data) => {
          resolve(data.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateContact: (params, body) => {
    return new Promise((resolve, reject) => {
      const { first_name, last_name, phone_number, email } = body;

      const query = `UPDATE "Contacts"
      SET
          first_name = $2,
          last_name = $3,
          phone_number = $4,
          email = $5
      WHERE
          id = $1;`;

      const values = [+params, first_name, last_name, phone_number, email];

      pool
        .query(query, values)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteContact: (params) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM "Contacts" WHERE id = $1`;

      pool
        .query(query, [params])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
