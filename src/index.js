const wait500 = () => {
  setTimeout(()=>{
    console.log('Wait 500 millisecs')
    setTimeout(() => {
      console.log('Wait 300 millisecs')
      console.log('no wait')
    })
  }, 500)
}
