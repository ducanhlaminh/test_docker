const express = require("express");
const app = express();
const port = 3000;

// Định nghĩa một endpoint GET đơn giản
app.get("/", (req, res) => {
      res.send("Hello World!");
});

// Lắng nghe các yêu cầu tới cổng đã chỉ định
app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
});
