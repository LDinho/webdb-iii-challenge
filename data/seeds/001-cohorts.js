exports.seed = async function(knex) {
  await knex('cohorts').truncate();

      // Inserts seed entries
  await knex('cohorts').insert([
        {name: 'web-pt1'},
        {name: 'web-pt2'},
        {name: 'web-pt3'}
      ]);
};
