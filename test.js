// write a program called fizzBuzz that console.logs numbers from 1 to 100, but for multiples of three print 'fizz,' for multiples of five print 'buzz,' and for multiples of both three and five print 'fizzbuzz.' Otherwise, do nothing.


function fizzBuzz() {
  for(var i = 1; i < 100; i++) {
    var fb = '';

    if(i % 3 === 0) {
      fb += 'fizz';
    }
    if(i % 5 === 0) {
      fb += 'buzz';
    }
    
    if(fb !== '') {
      console.log(fb);
    }
    else {
      console.log(i);
    }
  }
}
