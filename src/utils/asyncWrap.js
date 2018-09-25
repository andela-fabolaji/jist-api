export const asyncWrap = (asyncFn) => {
  return (req, res, next) => {
    return Promise
      .resolve(asyncFn(req, res, next))
      .catch(next);
  }
};