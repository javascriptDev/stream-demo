const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');
  
  //模拟首屏资源
  res.write(`<!DOCTYPE html>
			<html>
			<head>
				<title></title>
			</head>
			<body>
				<h1>hi,</h1>
				<script>
					document.querySelector('h1').onclick = function(){alert(2)}
				</script>
			`);

  	//模拟后续传输 第一次
	setTimeout(function(){
		res.write(`<div>haha</div>`);
	}, 2000)
	//模拟后续传输 第二次,关闭连接.
	setTimeout(function(){
		res.end(`<div>haha2</div>`);
	}, 4000)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
