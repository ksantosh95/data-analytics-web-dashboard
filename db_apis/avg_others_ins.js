const database = require('../services/database.js');
 
const baseQuery = 
 `
  `;
 
async function find(context) {
  const binds = {};
  let query=``;
  if (context.id) {
    binds.emp_id = context.id;
 
    query = `Select round(avg(total_count),2) as "avg_count" from
 (
 select count(i.ins_id) as total_count
 from service s, inspection i
 where i.ins_id = s.ins_id and emp_id not in (select ins_id from inspection where emp_id = :emp_id)
 group by emp_id
 )`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;