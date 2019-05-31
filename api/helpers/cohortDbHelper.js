const db = require('../../data/dbConfig');

module.exports = {
  getCohorts,
  // getCohortById,
  // addCohort,
  // updateCohort,
  // deleteCohort
}

function getCohorts () {
  return db('cohorts');
}
