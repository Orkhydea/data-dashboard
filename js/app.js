/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
// console.log(data['AQP']['2016-2']['students']);

var obtenerSedes = function (dataObj) {
    var select = document.getElementById("sedes");

    var dataKeys = Object.keys(data);
    console.log(dataKeys, dataKeys.length);
    for (var i = 0; i < dataKeys.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", dataKeys[i]);
        option.innerHTML = dataKeys[i];
        select.appendChild(option);
        console.log(dataKeys[i]);
    }
}
//se obtienen las generaciones
var obtenerGeneracion = function (e) {
    var sede = e.target.value;
    console.log(data[sede]);
    // console.log(data[sede]["2017-1"])
    // console.log(data[sede]["2017-1"]["students"]);

    var sedeKeys = Object.keys(data[sede]);
    var containerGen = document.getElementById("generations")
    containerGen.innerHTML = "";
    console.log(sedeKeys, sedeKeys.length);
    for (var i = 0; i < sedeKeys.length; i++) {
        var option2 = document.createElement("button");
        var divText = document.createTextNode(sedeKeys[i]);
        option2.setAttribute("data-sede", sede);
        option2.setAttribute("data-generacion", sedeKeys[i])
        option2.addEventListener("click", obtenerEstudiantes)

        option2.appendChild(divText);
        containerGen.appendChild(option2);
        console.log(sedeKeys[i]);
    }
}

// obteniendo estudiantes

var obtenerEstudiantes = function (e) {
    var estudiantes = e.target;
    console.log(estudiantes.dataset["sede"], estudiantes.dataset["generacion"]);
    var sede = estudiantes.dataset["sede"];
    var generacion = estudiantes.dataset["generacion"]
    var students = (data[sede][generacion]["students"])
    //console.log(students);
    var totalStudents = students.length;
    console.log(totalStudents);

    var studentGen = document.getElementById("totalEstudiantesGeneracion")
    studentGen.innerHTML = "";

    //crear parrafo en html totalStudents, crear textNode y appenChild

    var option3 = document.createElement("p");
    var divText = document.createTextNode("Total de estudiantes: " + sede + " " + generacion + "  " + totalStudents);
    //option3.setAttribute("data-sede", sede);
    // option3.setAttribute("data-generacion", sedeKeys[i])
    option3.setAttribute("data-students", totalStudents)
    option3.addEventListener("click", obtenerEstudiantes)

    // option2.addEventListener("click", obtenerEstudiantes)

    option3.appendChild(divText);
    studentGen.appendChild(option3);
    console.log(totalStudents);

    //----FOR QUE ITERA EN LAS ESTUDIANTES Y CUENTA LAS ACTIVAS Y NOS DA EL NOMBRE DE LAS INACTIVAS, SE UTILIZA CONTADOR---//
    studActivas = 0;
    studInactivas = 0;
    nombreInactivas = [];

    for (var i = 0; i < totalStudents; i++) {
        if (students[i]["active"] == true) {
            studActivas++;
            var activas = studActivas;
        } else {
            studInactivas++;
            var inactivas = studInactivas;
            nombreInactivas.push(students[i]["name"]);
            console.log(nombreInactivas);
        }
    }

    //IMPRIME EL PORCENTAJE DE LAS ESTUDIANTES ACTIVAS E INACTIVAS   
    var porcentActivas = (studActivas * 100 / totalStudents).toFixed() + "%" + " Total: " + activas;
    var porcentInactivas = (studInactivas * 100 / totalStudents).toFixed() + "%" + " Total: " + inactivas;

    var option4 = document.createElement("p");
    var divText1 = document.createTextNode("Porcentaje de las estudiantes activas: " + porcentActivas);
    option4.setAttribute("data-active", porcentActivas);
    option4.addEventListener("click", obtenerEstudiantes)
    option4.appendChild(divText1);
    studentGen.appendChild(option4);
    console.log(porcentActivas);

    var option5 = document.createElement("p");
    var divText2 = document.createTextNode("Porcentaje de las estudiantes inactivas: " + porcentInactivas);
    option5.setAttribute("data-active", porcentInactivas);
    option5.addEventListener("click", obtenerEstudiantes)
    option5.appendChild(divText2);
    studentGen.appendChild(option5);
    console.log(porcentInactivas);




//     var porcentajeActivas = contActivas *100/ totalStudents;
//     var totalActivas = porcentajeActivas.toFixed() + "%" ;
  
//     var porcentajeInactivas = contInactivas * 100/ totalStudents;
//     var totalInactivas = porcentajeInactivas.toFixed() + "%";
  
//     containerTotalStudents.textContent ="*"+" "+ sede + " " + generation + " " + " Total de estudiantes : " + totalStudents;
  
//    containerActivas.textContent = "* El porcentaje de estudiantes activas es del : " + totalActivas + " " +  " total : " + activas;
//    containerInactivas.textContent = "* El porcentaje de estudiantes inactivas es del : " + totalInactivas + " " + " total : " + inactivas;
//    nameTotalInactivas.textContent = "* Estudiantes que desertaron : " + nameInactivas;

    //IMPRIME EL NOMBRE DE LAS ESTUDIANTES INACTIVAS
    // var option6 = document.createElement("p");
    // var divText3 = document.createTextNode("Nombre de las estudiantes que desestaron por generacion: " + nombreInactivas);
    // option6.setAttribute("data-active", nombreInactivas);
    // option6.addEventListener("click", obtenerEstudiantes);
    // option6.appendChild(divText3);
    // studentGen.appendChild(option6);
    // console.log(nombreInactivas);
}



document.getElementById("sedes").addEventListener("change", obtenerGeneracion)

obtenerSedes(data);




