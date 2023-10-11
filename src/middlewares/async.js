export default function handler(fn) {
  return async (...params) => {
    try {
      return await fn(...params);
    } catch (error) {
      return { status: 500, message: error.message };
    }
  };
}
