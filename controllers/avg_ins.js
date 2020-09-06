const total_ins = require('../db_apis/avg_ins.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = req.params.emp_id;
 
    const rows = await total_ins.find(context);
 
    if (req.params.emp_id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;