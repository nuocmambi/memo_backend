let express = require('express');
let router = express.Router();



let notes = [
    {
        id:1,
        title: 'nettverk',
        notes: [
            {
                id:1,
                text: 'qwewq'
            },
            {
                id:2,
                text: 'gfgngng'
            },
            {
                id:3,
                text: '3f4g3bt'
            },
            {
                id:4,
                text: 'ndnhdhrth'
            },
            {
                id:5,
                text: 'ntnyh4w'
            },
            {
                id:6,
                text: 'rge2ffw'
            }
        ]
    },
    {
        id:2,
        title: 'sikkerhet',
        notes: [
            {
                id:1,
                text: 'nhtnttr'
            },
            {
                id:2,
                text: 'referf'
            },
            {
                id:3,
                text: 'asdfsdfe'
            },
            {
                id:4,
                text: '32fde2'
            },
            {
                id:5,
                text: 'dfsfewf'
            },
            {
                id:6,
                text: 'wefwef'
            }
        ]
    },
    {
        id:2,
        title: 'norsk historie',
        notes: [
            {
                id:1,
                text: 'Kongen vår heter Harald'
            },
            {
                id:2,
                text: 'Henrik Ibsen var født i 1991'
            },
            {
                id:3,
                text: 'Petter Northug har vunnet 10 OL gull i svømming'
            },
            {
                id:4,
                text: 'Team OTP er best'
            }
        ]
    }
]


router.get('/', function(req, res, next) {
    res.send(JSON.stringify(notes));
  });

  module.exports = router;