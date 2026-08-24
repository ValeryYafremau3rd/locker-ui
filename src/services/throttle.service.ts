export default function throttle(func, delay) {
  let inThrottle;
  return function (...args) {
    if (inThrottle) {
      return;
    }
    inThrottle = true;
    setTimeout(() => {
      func.apply(this, args);
      inThrottle = false;
    }, delay);
  };
}
