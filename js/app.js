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
var obtenerGeneracion = function(e){
    var sede = e.target.value;
    console.log(data[sede]);

    // console.log(data[sede]["2017-1"])
    // console.log(data[sede]["2017-1"]["students"])
    var sedeKeys = Object.keys(data[sede]);
    console.log(sedeKeys, sedeKeys.length);
    for(var i = 0; i < sedeKeys.length; i++){
        var option2 = document.createElement("button");
        var divText = document.createTextNode(sedeKeys[i]);
        option2.appendChild(divText);
        document.body.appendChild(option2);
        console.log(sedeKeys[i]);
    }
}

 document.getElementById("sedes").addEventListener("change", obtenerGeneracion)
obtenerSedes(data);

var obtenerEstudiantes = function(click){
    var estudiantes = click.target.value;
   console.log(generacion[estudiantes]);

    // console.log(data[sede]["2017-1"])
    // console.log(data[sede]["2017-1"]["students"])
    var generacionKeys = Object.keys(sede[generacion]);
    console.log(generacionKeys, generacionKeys.length);
    for(var i = 0; i < generacionKeys.length; i++){
        // var option2 = document.createElement("option");
        // option2.setAttribute("value", sedeKeys[i]);
        // option2.innerHTML = sedeKeys[i];
        // option2.appendChild(option);
        console.log(generacionKeys[i]);
        
    }
}


// document.getElementsByTagName("button").
// data.addEventListener('click', obtenerEstudiantes);
// obtenerGeneracion(sede);



//  document.getElementById("option").addEventListener("change", obtenerEstudiantes)
// obtenerGeneracion(sede);


