const { createRouter } = require('../utils/router');
const timers = require('../controllers/timers');

module.exports = createRouter(timers)
  .post('/filter', function *(req, res) {
    res.json(yield timers.filter(req.body.userId));
  });
