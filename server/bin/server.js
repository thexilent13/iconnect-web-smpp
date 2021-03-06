#!/usr/bin/env node

/**
 * Module dependencies
 * (Config should be imported before importing any other file
 */
const config = require( '../config/config' );
var app = require( '../app' );
var debug = require( 'debug' )( 'mean-app:server' );
var http = require( 'http' );

/**
 * Connect to mongo db
 */

/**
 * Print mongoose logs in dev env
 */

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort( process.env.PORT || config.port );
app.set( 'port', port );

/**
 * Create HTTP server.
 */
var server = http.createServer( app );

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen( port );
server.on( 'error', onError );
server.on( 'listening', onListening );

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt( val, 10 );

	if (isNaN( port )) {
		// Named pipe
		return val;
	}

	if (port >= 0) {
		// Port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// Handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error( bind + ' requires elevated privileges' );
			process.exit( 1 );
			break;
		case 'EADDRINUSE':
			console.error( bind + ' is already in use' );
			process.exit( 1 );
			break;
		default:
			throw error;
	}
}

/**
 * Event listening for HTTP server "listening" event.
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug( 'Listening on ' + bind );
}