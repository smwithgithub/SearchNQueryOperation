
let studentArr = [];

// permission
let permission = confirm("Do you want to input students Informations?");

if(permission == true){
    
    let count = prompt("How many Students Information you want to save: ");

    for (let i =1; i<=count;i++){
    let userName = prompt("Enter "+i+" no student's name: ");
    let userDept = prompt("Enter "+i+" no student's Depertment: ");
    let userSection = prompt("Enter "+i+" no student's Section: ");
    let userId = prompt("Enter "+i+" no student's Id: ");


    let singleArray =[userName,userDept,userSection,String(userId)];

    studentArr.push(singleArray);
    }
}

console.log(studentArr);


let search = prompt("Enter value to check: ");

let searchCast = String(search);

let checkResult ;

for(let i=0; i<studentArr.length;i++){

    if(studentArr[i].includes(searchCast)==true){
        checkResult = i;
    }
    else{
        continue;
    }

}

if(checkResult!=undefined){
    console.log("The student information is:- "+studentArr[checkResult]);
}







