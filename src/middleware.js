module.exports = (req, res, next) => {
  console.log('middleware')
  return next()
}
