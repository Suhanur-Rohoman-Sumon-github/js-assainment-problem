
/*
in this fuction i provide first *, second +, third /, and  four -, than return total numbar
*/
function mindGame(num){
  if ( typeof NaN != num){
    return 'imput a valid numbar'
  }
    const numMultipul= num*3;
    const numPluse = numMultipul+10 ;
    const numDividade = numPluse /2;
    const numTotalNumbar = numDividade -5;
    return numTotalNumbar ;

}
 
/*
in this fuction i provide if  characterCound % 2 === 0 program return even and if charecterCound is % 2 = any than return me odd
  
*/

function evenOdd(name) {
  if ( typeof name != 'string'){
    return 'imput a valid name'
  }
    let charectarCount = name.length; 
    if (charectarCount % 2 === 0) {
      return 'even';
    }
     else {
      return 'odd'; 
    }
  }
  
   /*
      in this fuction i provide i make a defarent in 7 and my numbar than i made a condition if difarence <7 return me 
      my numbar othere wise you return me its double 
  */
  
  function isLGSeven(mynumbar) {
    if ( typeof NaN != mynumbar){
      return 'imput a valid numbar'
    }
    let difference = mynumbar - 7;
    if (difference < 7) {
      return mynumbar;
    } else {
      return mynumbar * 2;
    }
  }
  
  /*
      in this fuction i made a paramiter call inpur array and i made a lopp if inputarray is smollar than 0 than show me bad data and other wise it not count  
  */

  function findingBadData(inputarray) {
    if ( typeof NaN != inputarray){
      return 'imput a valid numbar'
    }
    let badDataCount = 0;
    for (let i = 0; i < inputarray.length; i++) {
        if (inputarray[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

 /*
      in this fuction i made 3 peramiter call gemes1, gemes2, gems3 first i mutipol my frind gemes and how gemes they have than i made a condition if total dimond is geter than or equal 1000 than return totalDimond-2000 if thin condition is  not full fill return me totalDimond 
  */
  
function gemsToDiamond(gems1, gems2, gems3) {
  if ( typeof NaN != gems1, gems2 , gems3){
    return 'imput a valid numbar'
  }
    const totalDiamond = gems1 * 21 + gems2 * 32 + gems3 * 43;
    if (totalDiamond >= 1000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }


