var fs = require('fs');

fs.renameSync('./lib/project-config.js','config.json');  
console.log('config json file renamed');

fs.rename('./lib/notes.md','./notes.md',function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('moved successfully');
    }
});
