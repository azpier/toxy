const toxy = require('..')
const poisons = toxy.poisons

const proxy = toxy()

proxy
  .forward('http://httpbin.org')

proxy.use(function (req, res, next) {
  // mad science here...
  next()
})

proxy
  .all('/*')
  .poison(poisons.latency(1000))

proxy.listen(3000)
console.log('Server listening on port:', 3000)
