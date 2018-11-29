module.exports = function wait(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
