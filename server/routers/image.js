var express = require('express');
var router = express.Router();
var upload = require('./s3/upload')
var s3Handler = require('./s3/s3Handler')

router.route('/').post(upload, s3Handler);

// router.route('/:id')
//   .get(function(req, res) {
//   });

module.exports = router;
