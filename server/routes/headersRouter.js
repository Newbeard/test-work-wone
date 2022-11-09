const router = require('express').Router();


router.route('/')
  .get(async (req, res) => {

    const headers = req.headers['user-agent'];

    try {

        return res.json(headers);
        
    } catch (error) {
      console.log(error.message);
      res.status(401)
        .json({
          message: error.message,
        }).end();
    }
  });

module.exports = router;
