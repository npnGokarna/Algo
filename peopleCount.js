/**
 * We have a list of people with birth year and death year. 
 * How can we figure out what year(s) has the highest population?
 * 
 * Example:
 * getYearsWithHighestPopulation([[1920, 1939], [1911, 1944], [1920, 1955], [1937, 1939]])
 * Result = [1937, 1938, 1939]
**/
const getYearsWithHighestPopulation = (people) => {
  // if there is single interval then return all the years in that interval
  if(people.length === 1) {
    return getYears(people[0]);
  }  
  let obj = {}, currIndex = 0;
  obj[currIndex] = {};
  obj[currIndex].birthYear = people[0][0];
  obj[currIndex].deathYear = people[0][1];
  obj[currIndex].count = 1;
  

  //loop through all intervals and check against existing intervals if they allign,
  // if yes then increase the count of people for that interval
  // set birth year as max out of two comparing intervals and death year as minimum.
  // if the interval is exclusive of current list, then create a new entry for such interval
  for(let i = 1; i<people.length; i++) {
    let index = isBetween(obj, people[i]);
    if(index !== null) {
        obj[index].birthYear = Math.max(obj[index].birthYear, people[i][0]);
        obj[index].deathYear = Math.min(obj[index].deathYear, people[i][1]);
        ++obj[index].count;
    } else {
        ++currIndex;
        obj[currIndex] = {};
        obj[currIndex].birthYear = people[i][0];
        obj[currIndex].deathYear = people[i][1];
        obj[currIndex].count = 1;
    }
  }

  let maxArr = [], maxCount = -1, finalArr = [];
  // push all the intervals with max number of people living in an Array
  // useful when there could be multiple intervals where people living were equally high
  // push all intervals into maxArr whose count is greater or equal to current maxCount
  // reset the array when some interval has more number of people living
  for (let item in obj) {
    let interval = [obj[item].birthYear, obj[item].deathYear];
    if (obj[item].count > maxCount) {
      maxCount = obj[item].count;
      maxArr = [];
      maxArr.push(interval);
    } else if (obj[item].count === maxCount){
      maxArr.push(interval);
    }
  }


  //incase there are multiple intervals where people living were equally high
  // loop through all intervals to accumulate all the years to a single array
  maxArr.forEach(item => {
    finalArr.push(...getYears(item));
  });

  return finalArr;
  
  
}


function isBetween(obj, arr) {
    for(let item in obj) {
        if (obj[item].deathYear >= arr[0]) {
            return item;
        }
    }
    return null;
}

function getYears(arr) {
  
  let temp = [];
  
  for(let i = arr[0]; i<=arr[1]; i++) {
    temp.push(i);
  }
  
  return temp;
  
}

// Tests
console.log(getYearsWithHighestPopulation([[1920, 1939], [1911, 1944], [1920, 1955], [1937, 1939], [1960, 1961]]))
console.log(getYearsWithHighestPopulation([[1920, 1939], [1911, 1944], [1920, 1955], [1937, 1939], [1960, 1961], [1939, 1939], [1960, 1960], [1960, 1960], [1960, 1960], [1960, 1960]]))