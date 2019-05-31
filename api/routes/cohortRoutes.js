const express = require('express');

const router = express.Router();

const db = require('../../data/dbConfig');

/*
@GET: all cohorts
@PARAMS: none
@ROUTE: "/api/cohorts"
*/

router.get('/', async (req, res) => {
  try {
    const cohorts = await db('cohorts'); // SQL - select * from cohorts

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

});

/*
@GET: students in a cohort
@PARAMS: id[STRING]!
@ROUTE: "/api/cohorts/:id/students"
*/

router.get('/:id/students', async (req, res) => {

});

/*
@POST: create new cohort
@PARAMS: name[STRING]!
@ROUTE: "/api/cohorts"
*/

router.post('/', async (req, res) => {

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
