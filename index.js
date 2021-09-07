'use strict';

// Import package
const express = require('express');

const morgan = require('morgan');

// Create application
const app = express();

// Import module
app.use(morgan('tiny'));
app.use(express.static('./public'));

const dogsList = [
	{ id: 3, name: 'bobby' },
	{ id: 5, name: 'wolf' },
];

app.get('/dogs', (req, res) => {
	res.json(dogsList.map((dog) => dog.id));
});

app.get('/dogs/:dogId', (req, res) => {
	const dogId = req.params.dogId;
	const theDog = dogsList.filter((dog) => dog.id == dogId);
	if (theDog.length == 1) {
		res.json(theDog[0]);
	} else {
		res.status(400).json({
			reson: 'dog not fount',
		});
	}
	res.json();
});

get.post('')

app.post('/dogs');

app.get('/login', (req, res) => {
	const user = req.query.user || 'Unknow';
	const pass = req.query.pass || 'Unknow';

	res.send(`Login data receivedr by ${user}  password ${pass} `);
});

// Activate server
app.listen(3000, () => console.log('Server ready'));
