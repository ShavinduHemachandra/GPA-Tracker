/*function calculateGrade() {

    const name = document.getElementById("name").value;
    const marks1 = Number(document.getElementById("marks1").value);
    const marks2 = Number(document.getElementById("marks2").value);
    const marks3 = Number(document.getElementById("marks3").value);
    const marks4 = Number(document.getElementById("marks4").value);

    let grade1;

    if (marks1 >= 75) {
        grade1 = "A";
    }

    else if (marks1 >= 65 && marks1 < 75) {
        grade1 = "B";
    }

    else if (marks1 >= 50 && marks1 < 65) {
        grade1 = "C";
    }

    else if (marks1 >= 35 && marks1 < 50) {
        grade1 = "S";
    }

    else {
        grade1 = "F";
    }

    document.getElementById("result1").textContent =
       grade1;
}

let grade 2 = calculateGrade(marks2);
let grade 3 = calculateGrade(marks3);
let grade 4 =calculateGrade(marks4);

*/

function maketable(){
    const count = Number(document.getElementById("subject").value);
    const table = document.getElementById("gpaTable");

    for (let i = 0; i < count; i++) {

        const row = table.insertRow();

        const subjectCell = row.insertCell();
        const gradeCell = row.insertCell();
        const gpaCell = row.insertCell();

        subjectCell.textContent = "Subject " + (i + 1);

        const gradeInput = document.createElement("input");
        gradeInput.type = "text";

        gradeCell.appendChild(gradeInput);

        gpaCell.textContent ="";

        let p = 1;
        p++;

            
        for(j = 0; j < p; j++){
                let grade;
        if(gradeInput.value === "A"){
            gpaCell.textContent = "4.0";
        }
        else if(gradeInput.value === "A-"){
            gpaCell.textContent = "3.7";
        }
        else if(gradeInput.value === "B+"){
            gpaCell.textContent = "3.3";
        }
        else if(gradeInput.value === "B"){
            gpaCell.textContent = "3.0";
        }
        else if(gradeInput.value === "B-"){
            gpaCell.textContent = "2.7";
        }
        else if(gradeInput.value === "C+"){
            gpaCell.textContent = "2.3";
        }
        else if(gradeInput.value === "C"){
            gpaCell.textContent = "2.0";
        }
        else if(gradeInput.value === "C-"){
            gpaCell.textContent = "1.7";
        }
        else {
            gpaCell.textContent = "0.0";
        }
    }



    }

    


}