function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}
function logger(msg, result) {
  const id = generateId();
  console.log(`ID:${id}),Message:${msg},result:${result}`);
}
module.exports = {
  logger
};
