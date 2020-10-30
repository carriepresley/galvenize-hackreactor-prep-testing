square=(n)=> {
    return n*n;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
    assertEqual=(condition, testName)=> {
    if (condition) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + ']');
    }
  }
  
  // TESTS FOR isOne
  var result1 = square(2);
  assertEqual(result1 === 4, 'should return result of a number squared');
  
  var result2 = square(3);
  assertEqual(result2 === 9, 'should return result of a number squared');

