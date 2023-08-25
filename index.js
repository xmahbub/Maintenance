const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  const maintenanceResponse = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Site Under Maintenance</title>
    <style>
      body {
        background-color: black;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        color: white;
      }
  
      .maintenance-container {
        text-align: center;
      }
  
      .maintenance-icon {
        font-size: 80px;
      }
  
      .maintenance-message {
        font-size: 24px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="maintenance-container">
      <div class="maintenance-icon">
        ⚙️
      </div>
      <div class="maintenance-message">
        <h1>Site Under Maintenance</h1>
        <p>We apologize for the inconvenience. The site is currently undergoing maintenance.</p>
      </div>
    </div>
  </body>
  </html>
  
  `;
  
  res.status(503).send(maintenanceResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
