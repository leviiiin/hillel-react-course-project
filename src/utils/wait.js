export default function wait(ms) {
  if (ms > 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  } else {
    throw new Error('ms must be a number')
  }
}