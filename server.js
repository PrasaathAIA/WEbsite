const express = require('express');

const app = express();

// Serve static files from the repository root
app.use(express.static(__dirname));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
