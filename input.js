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
  } else if (data.toLowerCase() === 'w') {
    connection.write("Move: up");
  } else if (data.toLowerCase() === 'a') {
    connection.write("Move: left");
  } else if (data.toLowerCase() === 's') {
    connection.write("Move: down");
  } else if (data.toLowerCase() === 'd') {
    connection.write("Move: right");
  } else if (data.toLowerCase() === 'd') {
    connection.write("Move: right");
  } else if (data.toLowerCase() === 'q') {
    connection.write("Say: Yummy!");
  } else if (data.toLowerCase() === 'e') {
    connection.write("Say: Grrrr!");
  }
  
};

module.exports = { setupInput };