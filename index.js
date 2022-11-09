const express = require('express');
const app = express();
const path = require('path');
const port = 8989;


app.use('/', express.static(path.join(__dirname, 'out')));





app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});