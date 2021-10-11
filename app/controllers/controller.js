const {
  createContacts,
  getAllContacts,
  updateContact,
  deleteContact,
  
} = require("../models/model.js");

const Tutorial = db.Tutorial;
const Op = db.Sequelize.Op;

module.exports = {
  create: (req, res) => {
    createContacts(req.body)
      .then((data) => {
        res.status(201).json({
          data,
          message: "success create contact",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: "error create contact",
        });
      });
  },

  getAll: (req, res) => {
    getAllContacts()
      .then((data) => {
        res.status(200).json({
          data,
          message: "success get all contacts data",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: "failed to get all contacts data",
        });
      });
  },

  findone: (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find contact with id= ${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving contact with id= ${id}.`,
        });
      });
  },

  update: (req, res) => {
    const id = req.params.id;

    updateContact(id, req.body)
      .then((data) => {
        res.status(200).json({
          data,
          message: "success update contact",
        });
      })
      .catch((err) => {
        res.status(err).json({
          err,
          message: "error update contact",
        });
      });
  },

  destroy: (req, res) => {
    const id = req.params.id;

    deleteContact(id)
      .then((data) => {
        res.status(200).json({
          data,
          message: "Success delete contact",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: "Failed to delete contact",
        });
      });
  },

  deleteAll: (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} contact were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occured while removing all contact",
        });
      });
  }
};