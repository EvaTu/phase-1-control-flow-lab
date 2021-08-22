
function scuberGreetingForFeet(distanceData){
  // Write your code here!
  if(distanceData <= 400){
    return "This one is on me!";
  }else if(distanceData > 2000 && distanceData < 2500){
    return "I will gladly take your thirty bucks.";
  }else {
    return "No can do.";
  }

}


function ternaryCheckCity(cityData){
  // Write your code here!
  return cityData === "NYC"? "Ok, sounds good.": "No go."
}


function switchOnCharmFromTip(customerData){
switch(customerData){
  // Write your code here!
  
  case"generous":
    return "Thank you so much.";
    break;
  case"not as generous":
    return "Thank you.";
    break;
  default:
    return "Bye.";
    break;

}
}

