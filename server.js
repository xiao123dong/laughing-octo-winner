'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const page = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>laughing-octo-winner</title>
</head>
<body style="font-family: sans-serif; text-align: center; margin-top: 15vh;">
<h1>laughing-octo-winner</h1>
<p>应用已上线，运行正常。</p>
<p>This is the laughing-octo-winner app, running on Caasify.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('ok');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('laughing-octo-winner listening on port ' + PORT);
});
