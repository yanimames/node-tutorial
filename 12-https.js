const http = require('http');

const server = http.createServer((req,res) => {
 if(req.url === '/'){
    res.end('welcome to our home page')
    return;
}
if (req.url === '/about'){
    res.end('here is our short history')
    return;
}
res.end(`
<h1>Oops!</h1>
<p> we cant seem to findthe page youre looking foor</p>
<a href="/">back home</a>`)
})

server.listen(5000)

//npm = global command, comes with node
//npm --version

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency / ust it in any project
//npm intall -g <packagename>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in th eroot, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _= require('lodash');

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');