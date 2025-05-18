const express = require('express');
const router = express.Router();

// Example: Dummy test route
router.get('/about', (req, res) => {
  res.json([{ first_name: "Moshe", last_name: "Israeli" }]);
});

module.exports = router;