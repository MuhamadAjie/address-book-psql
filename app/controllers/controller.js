const db = require("../models")
const Tutorial = db.tutorials
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.first_name) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return
    }

    const body = {
        first_name: req.body.first_name,
        last_name: req.body.last_name ? req.body.last_name : null,
        phone: req.body.phone ? req.body.phone : null,
        email: req.body.email ? req.body.email : null
    }

    Tutorial.create(body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error create!"
            })
        })
}

exports.findAll = (req, res) => {
    const first_name = req.query.first_name;
    var condition = first_name ? { first_name: { [Op.iLike]: `%${first_name}`}} : null;

    Tutorial.findAll({where: condition})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error findAll!"
            })
        })
} 

exports.findOne = (req, res) => {
    const id = req.params.id

    Tutorial.findByPk(id)
    .then((data) => {
        if (data) {
            res.send(data)
        } else {
            res.status(404).send({
                message: `cannot find id ${id}`
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || `Error retrive id ${id}!`
        })
    })
} 

exports.update = (req, res) => {
    const id = req.params.id

    Tutorial.update(req.body, {
        where: {id: id}
    })
    .then((num) => {
        (num == 1) ? res.send({
            message: "updated success"}) : res.send({ message: `cannot update id ${id}`})
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || `Error update id ${id}!`
        })
    })
}

exports.deleteOne = (req, res) => {
    const id = req.params.id

    Tutorial.destroy({
        where: {id: id}
    })
    .then((num) => {
        if (num = 1) {
            res.send({
                message: "deleteOne success"
            })
        } else {
            res.send({
                message: `cannot delete id ${id}`
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || `Error delete id ${id}!`
        })
    })
} 

exports.deleteAll = (req, res) => {
    Tutorial.destroy( {
        where: {},
        truncate: false
    })
    .then((nums) => {
        res.send({message: `${nums} success deleteAll`})
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || `Error deleteAll!`
        })
    })
} 