const express = require('express');
const jsonServer = require('json-server');
const uploadRouter = require('./upload'); // file upload.js
const cors = require('cors');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors());
app.use(middlewares);

// thêm router upload
app.use(uploadRouter);

// cho phép truy cập file tĩnh trong thư mục uploads
app.use('/uploads', express.static('uploads'));

// json-server routes
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Expense API running on http://localhost:${PORT}`);
});
