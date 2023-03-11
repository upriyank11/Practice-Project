var students = [
    { "firstName": "Justin", "lastName": "james", "age": 25 },
    { "firstName": "priyank", "lastName": "upadhyay", "age": 30 },
    { "firstName": "behnam", "lastName": "ghafouri", "age": 33 },
]

function showTable() {
    DisplayArrayOfStudenstInATableInPage(students)
}

function addToTable() {
    let firstNameInput = document.querySelector("#firstname")
    let lastNameInput = document.querySelector("#lastname")
    let ageInput = document.querySelector("#age")
    if(firstNameInput.value.includes("@") || lastNameInput.value.includes("@") || ageInput.value < 18 )
    {
        alert("NOT VALID")
    }else{
        let student = { "firstName": firstNameInput.value, "lastName": lastNameInput.value, "age": ageInput.value }
        students.push(student)
        DisplayArrayOfStudenstInATableInPage(students)
    }
    firstNameInput.value=""
    lastNameInput.value=""
    ageInput.value=0
}

function deleteFromTable(j){
   let newStudents = []
   for (var i = 0; i < students.length; i++) {
        if(i != j){
            let eachStudent = students[i]
            newStudents.push(eachStudent)
        }
    }
    students = []
    students = newStudents
    DisplayArrayOfStudenstInATableInPage(students)
}

var editableStudentIndex 
function editFromTable(j){
    editableStudentIndex = j
    document.querySelector("#smallform").classList.add("border")
    document.querySelector("#smallform").classList.add("border-warning")
    document.querySelector("#savebtn").classList.remove("disabled")
    let editableStudent = students[j]
    let firstNameInput = document.querySelector("#firstname")
    let lastNameInput = document.querySelector("#lastname")
    let ageInput = document.querySelector("#age")
    
    firstNameInput.value = editableStudent.firstName
    lastNameInput.value = editableStudent.lastName
    ageInput.value = editableStudent.age
}

function save(){
    
    deleteFromTable(editableStudentIndex)
    addToTable()    
    document.querySelector("#smallform").classList.remove("border")
    document.querySelector("#smallform").classList.remove("border-warning")
    document.querySelector("#savebtn").classList.add("disabled")

}

function DisplayArrayOfStudenstInATableInPage(studenstArray) {
    var dynamicTable = ""
    dynamicTable += '<table class="table"><tr><th>fist name</th><th>last name</th><th>age</th><th>delete</th><th>edit</th></tr>'
    for (var i = 0; i < studenstArray.length; i++) {
        var temporaryStudent = studenstArray[i]
        var stringOfOneRow = "<tr><th>" + temporaryStudent.firstName + "</th><th>" + temporaryStudent.lastName + "</th><th>" + temporaryStudent.age + "</th><th onclick='deleteFromTable("+i+")'>X</th><th onclick='editFromTable("+i+")'>E</th></tr>"
        dynamicTable += stringOfOneRow
    }
    dynamicTable += "</table>"
    document.querySelector("#mylist").innerHTML = dynamicTable
}

