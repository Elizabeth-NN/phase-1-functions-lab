// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    const scuberHq=42
    let numOfBlocks=pickupLocation-scuberHq
    return Math.abs(numOfBlocks) 

  }

  function distanceFromHqInFeet(pickupLocation) {
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const blocks=distanceFromHqInBlocks(pickupLocation)
    const feetPerBlock = 264
    return blocks * feetPerBlock 


    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blocksTravelled=Math.abs(destination-start)
    const feetPerBlock=264
    return blocksTravelled * feetPerBlock
   
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get distance in feet
  
    if (distance <= 400) {
      // First 400 feet are free
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      // 2 cents per foot after the first 400 feet
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      // Flat fare of $25 for distances over 2000 feet and under 2500 feet
      return 25;
    } else {
      // Rides over 2500 feet are not allowed
      return 'cannot travel that far';
    }
  }