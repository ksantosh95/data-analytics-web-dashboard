const database = require('../services/database.js');
 
const baseQuery = 
 `select round(avg(ins_score),1) as "avg_cnt"
  from inspection
  `;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.o_id = context.id;
 
    query += `\nwhere	f_id in  (select f_id from facility where o_id = :o_id)`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;