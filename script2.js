const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let arrObj = [];
let lines = csvData.split('\n');
let headers = lines[0].split(',');

for (let i = 1; i < lines.length; i++) {

    let rowData = lines[i].split('\n');
    arrObj[i] = {};

    for (let j = 0; j < rowData.length; j++) {
        console.log(headers[j]);

        console.log(rowData[j])
    }
}