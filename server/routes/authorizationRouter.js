const router = require('express').Router();

const checkToken = require('../utils/checkToken')

const tokenServer = process.env.TOKEN_SERVER

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        token
      } = req.body

      const result = checkToken(token, tokenServer)
      
      if (result)
        return res.json({
          message: 'successfully'
        });

      return res.json({
        message: 'error authorization'
      });

    } catch (error) {
      console.log(error.message);
      res.status(401)
        .json({
          message: error.message,
        }).end();
    }
  });

module.exports = router;
