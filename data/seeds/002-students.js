exports.seed = async function(knex) {
  await knex('students').truncate();

  // Inserts seed entries
  await knex('students').insert([
    {name: 'Jon', cohort_id: 3},
    {name: 'Kam', cohort_id: 2},
    {name: 'Jim', cohort_id: 2}
  ]);
};
