const db = require('../../data/dbConfig');

module.exports = {
  getCohorts,
  getCohortById,
  getStudentsInCohort,
  // addCohort,
  // updateCohort,
  // deleteCohort
}

function getCohorts() {
  return db('cohorts');
}

function getCohortById(id) {
  return db('cohorts')
    .where({ id })
    .first();
}

function getStudentsInCohort(cohortId) {
  return db('cohorts as c')
    .join(
      'students as s',
      's.cohort_id',
      'c.id'
    )
    .select(
      's.id as studentID',
      's.name as studentName',
      'c.id as cohortID',
      'c.name as cohortName'
    )
    .where('c.id', cohortId)
    .orderBy('s.name');
}
