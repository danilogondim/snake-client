const { commands } = require('./constants')
let connection;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (commands[data.toLowerCase()]) {
    connection.write(commands[data.toLowerCase()]);
  }
};

module.exports = { setupInput };