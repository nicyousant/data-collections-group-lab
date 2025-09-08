// Part 1. Refactoring Old Code
console.log('Part 1: Refactoring Old Code')

// https://www.delftstack.com/howto/javascript/parse-csv-in-javascript/
// https://stackoverflow.com/questions/48015270/steps-to-create-javascript-objects-from-text-data-out-of-a-csv-file-using-no-lib

function parseCSV(data) {
    const rows = data.split('\n');
    const result = rows.map(row => row.split(','));
    return result;
}

let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const parsedData = parseCSV(csvData);
console.log(parsedData);






//let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Part 2: Expanding Functionality
console.log('Part 2: Expanding Functionality')

let outputArr = []
let headingArr = []

// find the header row by using indexOf to locate the first occurence of \n and slice the first row.

// https://www.w3schools.com/jsref/jsref_slice_string.asp
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.


let headingEnd = csvData.indexOf('\n');

let headingRow = csvData.slice(0,headingEnd);


console.log(headingRow);


// headingRow.split(',') splits the header row by the comma and adds it to the outputArr
// string.split(separator, limit)

// separator	Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.

// limit	Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.

// https://www.w3schools.com/jsref/jsref_split.asp

headingArr = headingRow.split(',');

outputArr.push(headingArr);

console.log(`Number of columns = ${headingArr.length}`)
console.log(`Columns are ${headingArr}`)

// split the rest of the data into rows
// telling it to create a slice before the first row after the headingEnd

let dataRows = csvData.slice(headingEnd+1).split('\n')

console.log(dataRows)

// split each row into row array and push to outputArr

for (let i = 0; i < dataRows.length; i++) {
    let row = dataRows[i];
    let rowArr = row.split(',');
    outputArr.push(rowArr)
}

console.log(outputArr);

// Part 3: Transforming Data
console.log('Part 3: Transforming Data')

const inputArr = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"], 
    ["57", "Bob", "Fry Cook", "19"], 
    ["63", "Blaine", "Quiz Master", "58"], 
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

const peopleArray = []


// starting from the row after the header row (let i = 1), loop through each row

for (let i = 1; i < inputArr.length; i++) {
    // create a person object for each row of data
    let row = inputArr[i];
    let personObj = {};

    //loop through the array elements of the row and add the key-value pair to personObj
    for (let k = 0; k < row.length; k++) {
        personObj[inputArr[0][k]] = row[k];
     
    }
    // after fininshing the row, add personObj to peopleArray
    peopleArray.push(personObj);
    
}

console.log(peopleArray);

// Part 4: Sorting and Manipulating Data
console.log('Part 4: Sorting and Manipulating Data')

// Sort array in place
//The sort() method sorts the elements of an array in alphabetical order.

peopleArray.sort();

//Remove the last element of the sorted array.
// pop() removes the last element of an array.

peopleArray.pop();

// Insert the following object at index 1:
// The splice() method adds or removes array elements.

peopleArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add the following object to the end of the array.
//push() adds new items to the end of an array:

peopleArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(peopleArray);

// Calculate the average age of the group
let numberOfPeople = peopleArray.length;

for (let i = 0; i < peopleArray.length; i++) {
    personObj = peopleArray[i];
   

}
//  console.log(personObj)



// Part 5: Full Circle
console.log('Part 5: Full Circle');

//convert array of objects to multi-dimensional array, then convert to CSV string 
const csvArray = [];

// find the headers from the 1st object, add to array
let csvHeaders = Object.keys(peopleArray[0]);
csvArray.push(csvHeaders);



// get the rest of the data from object value, store in an array, then add to csvArray
for (let person in peopleArray) {
    let personObj = peopleArray[person];
    let personArr = [];

    for (const key in personObj) {
        personArr.push(personObj[key]);
    }

    csvArray.push(personArr);
}



// Join data (array elements) on each row, then join rows array to make CSV converted string.
let rowsArr = [];

for (let i = 0; i < csvArray.length; i++) {
    let row = csvArray[i];
    rowsArr.push(row.join(','));
}

let csvConvertedStr = rowsArr.join(',');
console.log(csvConvertedStr);