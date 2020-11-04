// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      newArray.push(callbackFunction(array[i]));
    }
  
    return newArray;
  }
  
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n * n * n;
    });
  }


  // ASSERTION FUNCTION(S) TO BE USED

  assertArraysEqual=(actual, expected, testName)=> {
    var hasSameValues = true;
    for (var i =0; i<actual.length; i++){
      if (actual[i]!== expected[i]){
        hasSameValues = false;
        break;
      }
    }
    var hasSameLengths= actual.length === expected.length;

    if (hasSameValues && hasSameLengths) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + ']');
    }
  }
  
  
  // TESTS CASES

 addOne=(val)=>{
   return val + 1;
 }
 
var inputForMap = [1, 2, 3];
var actualMap = map(inputForMap, addOne);
var expectedMap = [2, 3, 4];
assertArraysEqual(actualMap, expectedMap, "should correctly map elements of an array");
 


  

