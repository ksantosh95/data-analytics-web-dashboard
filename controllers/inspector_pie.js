const inspector_pie = require('../db_apis/inspector_pie.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = req.params.emp_id;
 
    const rows = await inspector_pie.find(context);
 
    if (req.params.emp_id) {
      if (rows.length === 1) {  <!-- final result --> 
        res.status(200).json(rows[0]); //copy in every controller
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