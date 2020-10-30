assertArraysEqual=(actual, expected, testName)=> {
     let sameLength= expected.length === actual.length;
     let sameValues = true;

     for(var i = 0; i<expected.length; i++){
           if(expected[i]!==actual[i]){
                 sameValues=false;
                 break;
           }
     }   
     if (sameValues && sameLength){
           console.log('passed');
     } else {
           console.log('FAILED ['+  testName + '] Expected "'+ expected+ '", but got "' +actual+ '"');
     }
    }

  
/*SUCCESS CASE */
    var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
    var actual = 'broken'.split('');



    assertArraysEqual(actual, expected, 'splits string into array of characters');
    // console output:
    // passed

