const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.listen(4000, () => console.log('Listening on port 4000'))