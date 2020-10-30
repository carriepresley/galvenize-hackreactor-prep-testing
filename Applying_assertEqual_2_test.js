

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
    if (doesEveryElementMatch === false){
      break;
    }
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
assertEqual=(condition, testName)=> {
  if (condition) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']');
  }
}


// TESTS CASES
const lessThanTen = (num) => {
  return num <10;
}

const arrayTrue = [1, 3, 3, 2, 1, 3];
var actualTrue = every(arrayTrue, lessThanTen);
assertEqual(actualTrue, true, "Should return true when all values are less than 10");

const arrayFalse = [1, 3, 3, 2, 17, 1];
var actualFalse = every(arrayFalse, lessThanTen);
assertEqual(actualFalse, false, "Should return false when all values are NOT less than 10");


