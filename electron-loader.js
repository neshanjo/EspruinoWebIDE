#!/usr/bin/env node
/* This uses node.s to launch electron, so we can use NPM to
run this as a command (see package.json) */

// It just returns a path
var electronPath = require( 'electron-prebuilt' ) ;

var childProcess = require( 'child_process' ) ;

// Adjust the command line arguments: remove the "node <code.js>" part
var args = process.argv.slice( 2 ) ;  
// ... and insert the root path of our application as the first argument
args.unshift( __dirname  + "/electron-app.js" );

p.on('close', function(code) {
  console.log('Loading electron...');
});

// Run electron
var p = childProcess.spawn( electronPath , args , { stdio: 'inherit' } ) ;  
// print output
p.stdout.on('data', function(data) {
  console.log(data);
});
p.stderr.on('data', function(data) {
  console.log(data);
});
// handle close
p.on('close', function(code) {
  console.log('Child process ended with code ' + code);
});
