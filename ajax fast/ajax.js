const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  //模拟首屏资源
  res.write(JSON.stringify({name:1}));

	//模拟后续传输 第1次,关闭连接.
	setTimeout(function(){
		res.end(JSON.stringify({haha:44}));
	}, 2000)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
