const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: '*'}));
app.use( express.json({ extended: true }));
app.use('', require('./routes/text'));

// Start API
const PORT = process.env.PORT || 4000;
var server = app.listen(PORT, () => {
    console.log(`API server started at port ${PORT}`);
});