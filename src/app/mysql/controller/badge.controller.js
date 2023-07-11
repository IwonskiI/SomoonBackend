const db = require('../model/index.js');
const SPECIALIZED= db.SPECIALIZED;
const COMPANY_ABILITIES = db.COMPANY_ABILITIES;
const Op = db.sequelize.Op;

//Create recommend
exports.add = (req, res) => {
    //Validate request
    if(!req.params.company) {
        res.status(400).send({
            message: 'Company_num is empty!'
        });
        return;
    }
    if(!req.params.ability) {
        res.status(400).send({
            message: 'Ability_num is empty!'
        });
        return;
    }

    //Set Recommend
    const specialized = {
        Company_num: req.params.company,
        Ability_num: req.params.ability,
    };

    //Save recommend
    SPECIALIZED
        .create(specialized)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create badge failure.'
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    SPECIALIZED.destroy({
      where: { Company_num: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};

exports.showAll = (req, res) => {
  
    COMPANY_ABILITIES.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving COMPANY_ABILITIES."
        });
      });
};