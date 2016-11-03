let dog = {
  sound: 'hong hong',
  bark: function() {
    console.log(this.sound)
  }
}

let cat = {
  sound: 'nian nian',
  bark: dog.bark.bind(dog)
}

cat.bark()

