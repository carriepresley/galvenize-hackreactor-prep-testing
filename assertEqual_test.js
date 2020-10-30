assertEqual=(actual, expected, testName) => {
    if(actual===expected){
          console.log('passed');
    } else {
          console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' +actual+ '"' );
    }
        }

        
/*SUCCESS CASE */
        multiplyByTwo=(n)=> {
            return n * 2;
          }
          var actualEQUAL = multiplyByTwo(2); // returns 4
          assertEqual(actualEQUAL, 4, 'it doubles 2 to 4');
          
          // console output:
          // passed

/*FAILURE CASE */
          multiplyByTwo=(n)=> {
            return (n * 2) + 1; // an incorrect implementation
          }
          var actualFAIL = multiplyByTwo(2); // returns 5
          assertEqual(actualFAIL, 4, 'it doubles 2 to 4');
          // console output:
          // FAILED [it doubles 2 to 4] Expected "4", but got "5"
          