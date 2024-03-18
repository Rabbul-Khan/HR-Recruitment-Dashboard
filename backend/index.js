const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const candidates = {
  totalCandidates: 361,
  shortlistedCandidates: 201,
  rejectedCandidates: 160,
};
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/candidates', (request, response) => {
  response.json(candidates);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
