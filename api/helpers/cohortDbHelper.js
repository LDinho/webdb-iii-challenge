const db = require('../../data/dbConfig');

module.exports = {
  getCohorts,
  getCohortById,
  getStudentsInCohort,
  addCohort,
  updateCohort,
  deleteCohort
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

async function addCohort(cohort) {
  const [id] = await db('cohorts')
    .insert(cohort, 'id');
  // we get the id back when inserting
  // new data
  return getCohortById(id);
}

async function updateCohort(id, changes) {
  await db('cohorts')
    .where({ id })
    .update(changes, '*');

  return getCohortById(id);
}

function deleteCohort(id) {
  return db('cohorts')
    .where({ id })
    .del();
}
