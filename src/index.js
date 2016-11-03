const logWaitTime = (waittime) => {
  console.log('Wait ' + waittime + 'millisecs')
}
const waitThenLog = (waittime) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(waittime), waittime)
  })
}

/*waitThenLog(500)
  .then((waittime) => {
    logWaitTime(waittime)
    return waitThenLog(300)
  })
  .then(waittime => {
    logWaitTime(waittime)
    console.log('no wait')
  })*/

/*waitThenLog(500)
  .then((waittime) => { return logWaitTime(waittime) })
  .then(() => { return waitThenLog(300) })
  .then((waittime) => { return logWaitTime(waittime) })
  .then(() => console.log('no wait'))*/

  waitThenLog(500)
    .then(logWaitTime)
    .then(() => { return waitThenLog(300) })
    .then(logWaitTime)
    .then(() => console.log('no wait'))


