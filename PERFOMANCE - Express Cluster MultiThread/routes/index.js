const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(`Worker ${process.pid} called`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
