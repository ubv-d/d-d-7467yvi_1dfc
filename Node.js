const express = require('express');
const app = express();

// 模拟生成新的二维码图片URL
app.get('/generate-qrcode', (req, res) => {
    const newQrcodeUrl = 'https://example.com/new_qrcode.png'; // 新的二维码图片URL
    res.json({ qrcodeUrl: newQrcodeUrl });
});

app.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});
