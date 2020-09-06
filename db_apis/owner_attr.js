const database = require('../services/database.js');
 
const baseQuery = 
 `


  `;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.o_id = context.id;
 
    query = `
select o_name as "o_name" from owner 
where o_id = :o_id

`;

  }
 
  const result = await database.simpleExecute(query, binds);
	
  return result.rows;
}
 
module.exports.find = find;