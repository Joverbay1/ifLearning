/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(longString){
  if(longString.length > 20){
    return "That's a long string!"
  }
}



function isItMedium(regularString){
  if(regularString.length >= 10 && regularString.length <= 20)
    return "That's a regular sized string!" 
  }



function isItShort(shortSize){
  if(shortSize.length < 10){
    return "That's a small string!"
  }else{
    return "That's not a small string!"
}
  }




  function howLongIsMyString(longString){
    if(longString.length > 20){
      return "That's a long string!";
    }else{
      if(longString.length >= 10 && longString.length <= 20){
        return "That's a regular sized string!"
      }else{
        if(longString.length < 10)
        return "That's a small string!"
      }
    }
    
function instructorHeight(instructor){
  if(instructor.length === 'Kyle'){
    return '70'
  }else if(instructor.length === 'Jason'){
    return '73'
  }else if(instructor.length !== 'Kyle' && instructor.length !== 'Jason'){
    return "I don't know that instructor!"
  }
}
  

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}