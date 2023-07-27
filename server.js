const express = require('express');
const path = require('path');
// const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`./dist/googleads`));

app.get('/*', (req, res) => {
res.sendFile(`index.html`, { root: 'dist/googleads'});
});

app.listen(process.env.PORT || 8080);
