'use strict';

// Import package
const express = require('express');

// Create application
const app = express();

// Import module
app.use(express.static('./public'));

app.get('/login', (req, res) => {
	const user = req.query.user || 'Unknow';
	const pass = req.query.pass || 'Unknow';
});

// Activate server
app.listen(3000, () => console.log('Server ready'));
