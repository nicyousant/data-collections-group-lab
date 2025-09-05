let index = 0; 
let cellOne = "";
let cellTwo = "";
let cellThree = "";
let cellFour = "";
let currCell = "";

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

while (index < csvData.length) {
  if (csvData[index] == ",") {
    index++; //don't include the comma
    if (cellOne.length == 0) {
      cellOne = currCell; 
    } else if (cellTwo.length == 0) {
      cellTwo = currCell;
    } else if (cellThree.length == 0) {
      cellThree = currCell;
    } 
    currCell = ""; //reset current cell string
  }
  else if(csvData[index] == "\n"){
    cellFour = currCell; //this is the last cell: print and reset everything to continue
    console.log(`${cellOne},${cellTwo},${cellThree},${cellFour}`);
    currCell = "";
    cellOne = "";
    cellTwo = "";
    cellThree = "";
    cellFour = "";
    index++;
  } 
  else {
    currCell += csvData[index]; 
    index++;
  }
}



// let rowData = csvData.split('\n')
// let arrOfArr = []


// for (i = 0 ; i < rowData.length ; i++) {
//     let colData = rowData[i].split(',')
//     arrOfArr.push(colData)
// }

// console.log(arrOfArr)

// let arrObj = {}


// for (j = 0 ; j < arrOfArr.length -1 ; j++ ) {
    
//     for ( k = 0 ; k < arrOfArr[j].length ; k++) {
//         let newKey = arrOfArr[0][k];
//         arrObj[newKey] = arrOfArr[j+1][k]
//        console.log(newKey)
//     }
//     arrOfArr[j] = arrObj
// }
// console.log(arrOfArr)