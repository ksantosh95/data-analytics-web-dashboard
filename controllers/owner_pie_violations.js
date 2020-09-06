const owner_pie_violations = require('../db_apis/owner_pie_violations.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = req.params.o_id;
	
    const rows = await owner_pie_violations.find(context);
 
    if (req.params.o_id) {
		
      if (rows.length === 1) {
		 
	  res.status(200).json(rows[0]);}
		if(rows.length > 1)
		{
			res.status(200).json(rows);
		
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