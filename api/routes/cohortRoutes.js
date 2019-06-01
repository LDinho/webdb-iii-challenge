const express = require('express');

const router = express.Router();

const {
  getCohorts,
  getCohortById,
  getStudentsInCohort,
  addCohort,

} = require('../helpers/cohortDbHelper');

/*
@GET: all cohorts
@PARAMS: none
@ROUTE: "/api/cohorts"
*/

router.get('/', async (req, res) => {
  try {
    const cohorts = await getCohorts();

    if (cohorts.length) {
      res.status(200).json(cohorts)

    } else {
      res.status(404).json({message: `No cohorts found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve cohorts`})
  }

});

/*
@GET: cohort
@PARAMS: id[STRING]!
@ROUTE: "/api/cohorts/:id"
*/

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const cohort = await getCohortById(id);

    if (!cohort) {
      return res.status(404).json({message: 'cohort not found'});
    }

    res.status(200).json(cohort);
  }
  catch (err) {
    res.status(500)
      .json({
        err,
        message: 'Unable to process request'
      })
  }
});

/*
@GET: students in a cohort
@PARAMS: id[STRING]!
@ROUTE: "/api/cohorts/:id/students"
*/

router.get('/:id/students', async (req, res) => {
  const { id } = req.params;

  try {
    const students = await getStudentsInCohort(id);

    if (students.length) {
      res.status(200).json(students);

    } else {
      res.status(404)
        .json({
          message: `cohort has no students.`
        })
    }
  }
  catch (err) {
    res.status(500)
      .json({
        error: `Unable to retrieve cohort's students.`
      })
  }

});

/*
@POST: create new cohort
@PARAMS: name[STRING]!
@ROUTE: "/api/cohorts"
*/

router.post('/', async (req, res) => {
  const newCohort = req.body;

  try {
    const { name } = newCohort;

    const cohorts = await getCohorts();

    const result = cohorts.filter((cohort) => {
      return name === cohort.name;
    });

    if (!name) {
      return res.status(400)
        .json({
          error: 'name missing'
        });

    } else if (result.length) {

      return res.status(400)
        .json({
          message: `${name} already exist`
        });

    } else {

      const cohortAdded = await addCohort(newCohort);

      res.status(201).json(cohortAdded);
    }
  }
  catch (err) {
    return res.status(500)
      .json({
        err,
        message: 'Unable to process request'
      })
  }
})

/*
@PUT: cohort
@PARAMS: id[STRING]! name[STRING]!
@ROUTE: "/api/cohorts/:id"
*/

router.put('/:id', async (req, res) => {

})

/*
@DELETE: cohort
@PARAMS: id[STRING]!
@ROUTE: "/api/cohorts/:id"
*/

router.delete('/:id', async (req, res) => {

})

module.exports = router;
