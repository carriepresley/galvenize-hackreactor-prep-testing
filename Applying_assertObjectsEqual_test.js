// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
assertObjectsEqual=(actual, expected, testName)=>{
  actual=JSON.stringify(actual);
  expected=JSON.stringify(expected);
  

  if (actual === expected){
    console.log("passed");
  } else {
    console.log("Failed [" + testName + "]")
  }
}

// TESTS CASES

let inputObj= {
  firstName: "Carrie", 
  middleName: "Marie", 
  lastName: "Presley"
}

var outputObj = addFullNameProp(inputObj);
var expectedObj= {
  firstName: 'Carrie',
  middleName: 'Marie',
  lastName: 'Presley',
  fullName: 'Carrie Presley'
}
assertObjectsEqual(outputObj,expectedObj, "should add fullname prop to the object");
