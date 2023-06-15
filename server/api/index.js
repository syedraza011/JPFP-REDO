'use strict'
const router = require('express').Router()
const Students = require('../db/models/StudentsDB')
const Campuses = require('../db/models/campusDB')

router.get('/campuses/:id/students', async (req, res, next) => {
  try {
    const students = await Students.findAll({
      where: {
        campusId: req.params.id
      }
    })
    res.json(students)
  } catch (error) {
    next(error)
  }
})

router.get('/students/:id/campus', async (req, res, next) => {
  try {
    const student = await Students.findById(req.params.id)
    const campus = await Campuses.findOne({
      where: {
        id: student.campusId
      }
    })
    res.json(campus)
  } catch (error) {
    next(error)
  }
})

router.get('/students', async (req, res, next) => {
  try {
    const students = await Students.findAll()
    res.json(students)
  } catch (error) {
    next(error)
  }
})

router.get('/campuses', async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll()
    res.json(campuses)
  } catch (error) {
    next(error)
  }
})

router.get('/students/:id', async (req, res, next) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send(student);
  } catch (error) {
    next(error);
  }
})

router.get('/campuses/:id', async (req, res, next) => {
  try {
    const campes = await Campuses.findById(req.params.id);
    res.send(campes);
  } catch (error) {
    next(error);
  }
})

router.post('/students', async (req, res, next) => {
  try {
    const newStudent = await Students.create(req.body)
    res.send(newStudent)
  } catch (error) {
    next(error)
  }
})

router.post('/campuses', async (req, res, next) => {
  try {
    const newCampuses = await Campuses.create(req.body)
    res.send(newCampuses)
  } catch (error) {
    next(error)
  }
})

router.delete('/students/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await Students.destroy({
      where: {
        id: id
      }
    })
    res.status(204).send(Students.findById(id))
  } catch (error) {
    next(error)
  }
})

router.delete('/campuses/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await Campuses.destroy({
      where: {
        id: id
      }
    })
    res.status(204).send(Campuses.findById(id))
  } catch (error) {
    next(error)
  } 
})

router.put('/students/:id', async (req, res, next) => {
  try {
    const studentToUpdate = await Students.findById(req.params.id)
    res.send(await studentToUpdate.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.put('/campuses/:id', async (req, res, next) => {
  try {
    const campusesToUpdate = await Campuses.findById(req.params.id)
    res.send(await campusesToUpdate.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router 
