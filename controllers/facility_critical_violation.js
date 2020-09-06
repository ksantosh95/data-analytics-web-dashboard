const facility_critical_violation = require('../db_apis/facility_critical_violation.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = req.params.f_id;
 
    const rows = await facility_critical_violation.find(context);
 
    if (req.params.f_id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } 
	  else if(rows.length>1)
	  {
		 res.status(200).json(rows); 
	  }
	  else {
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