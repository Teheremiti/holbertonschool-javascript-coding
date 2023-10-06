module.exports = function counStudents(path) {
  const fs = require('fs');

  fs.readFile(path, (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
    console.log(`Number of students: ${lines.length - 1}`);

    let CSstudents = '';
    let CScount = 0;
    let SWEstudents = '';
    let SWEcount = 0;
    for (const line of lines.slice(1)) {
      if (line.endsWith('CS')) {
        CScount++;
        CSstudents += line.split(',')[0] + ', ';
      } else if (line.endsWith('SWE')) {
        SWEcount++;
        SWEstudents += line.split(',')[0] + ', ';
      }
    }
    console.log(`Number of students in CS: ${CScount}. List: ${CSstudents.slice(0, -2)}`);
    console.log(`Number of students in SWE: ${SWEcount}. List: ${SWEstudents.slice(0, -2)}`);
  });
}
