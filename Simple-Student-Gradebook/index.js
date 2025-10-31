let grades = [90, 91, 92, 93, 94];

function calculateAverage(grades) {
    let sum = 0;
    let output = "";
    let average = 0;

    output += "Grades: ";
    for (let i = 0; i < grades.length; ++i) {
        sum += grades[i];
        output += grades[i];

        if (i != grades.length - 1) output += ", ";
    } output += '\n';

    average = sum / grades.length;

    output += `Average Grade: ${average}\n`;
    console.log(output);
    return average;
}

function checkPassOrFail(averageGrade) {
    let output = "";

    if (average >= 75)
        output += "Class Passed";
    else
        output += "Class Failed";
    return output;
}

let average = calculateAverage(grades);
let result = checkPassOrFail(average);