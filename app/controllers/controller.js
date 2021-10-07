const {
    createContacts,
    getAllContacts,
    updateContact,
    deleteContact,
  } = require("../models/model.js");
  
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
  };