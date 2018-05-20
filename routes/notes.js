let express = require('express');
let router = express.Router();


let notes = [
    {
        id:1,
        note: 'asdfg'
    },
    {
        id:2,
        note: 'fgfdgd'
    },
    {
        id:3,
        note: 'uiui'
    }
]


router.get('/', function(req, res, next) {
    res.send(JSON.stringify(notes));
  });

  module.exports = router;