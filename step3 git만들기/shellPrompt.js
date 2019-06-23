const init = require('./init');


const readline = require('readline');
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


r.prompt();
r.on('line', function (line) {
    if (line === 'exit') {
        r.close();
    }
    if(line.slice(0,4) === 'init'){
        init.init(line);
    }else if(line.slice(0,6) === 'status'){
        init.status(line);
    }else if(line.slice(0,8) === 'checkout'){
        init.checkout(line);
    }
    r.prompt()
});
r.on('close', function () {
    process.exit();
})

module.exports = {
    r
}