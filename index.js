#!/usr/bin/env node
var terminal = require('oh-my-terminal')

exports.start = function start(cmd) {
  console.log('Summoning daemon: ' + cmd)

  // run shell command in node wrapper
  terminal.exec(cmd, function(err, stdout, stderr) {
    if(err) console.log(err)
    else console.log(stdout) + console.log(stderr) ;
  });
  
  console.log('Daemon has been summoned.')
};
