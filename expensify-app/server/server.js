const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath));

// Matches all 404 paths and redirects to index
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('server is runniing')
});