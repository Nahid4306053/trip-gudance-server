const createError = require('http-errors');
const { sign, verify } = require('jsonwebtoken');
const Peoples = require('../../models/PeopleModel');
const router = require('express').Router()

const VerifyTourGuide = async (req, res, next) => {
  try {
    if (req.CurrentUser.role === 'tour guider') {
       next()
    } else {
      next(createError(401, 'Unathorized Tour guider'))
    }
  } catch (err) {
    console.log(err)
    next(createError(500, 'There is server Side Error'))
  }
}

// router.get('/', async (req, res, next) => {

// })

module.exports = VerifyTourGuide
