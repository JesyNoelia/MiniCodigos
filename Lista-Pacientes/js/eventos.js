let seccionPaciente = document.getElementById('pacientes')

function pintarUnPaciente(pPaciente) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    let nombrePaciente = document.createTextNode(pPaciente.nombre + ' ' + pPaciente.apellido);
    let edadPaciente = document.createTextNode('Edad: ' + pPaciente.edad);
    let diagnosticoPaciente = document.createTextNode('Diagnostico: ' + pPaciente.diagnostico);
    let numerossPaciente = document.createTextNode('Numero SS: ' + pPaciente.numeroSS);

    h3.appendChild(nombrePaciente);
    p1.appendChild(edadPaciente);
    p2.appendChild(diagnosticoPaciente);
    p3.appendChild(numerossPaciente);

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    article.appendChild(h3);
    article.appendChild(div);
    seccionPaciente.appendChild(article);
}


function pintarListapacientes(pListaHospital) {
    seccionPaciente.innerHTML = "";
    pListaHospital.forEach(function (paciente) {
        return pintarUnPaciente(paciente);
    });
}
pintarListapacientes(pacientesHospitalPrincesa);


let selectorDiagnostico = document.getElementById('diagnostico');
selectorDiagnostico.addEventListener('change', recogeDiagnostico);
function recogeDiagnostico(event) {
    let enfermedad = event.target.value;
    if (enfermedad !== "") {
        const listaDiagnostico = filtrarPorDiagnostico(enfermedad, pacientesHospitalPrincesa);
        pintarListapacientes(listaDiagnostico)
    } else {
        pintarListapacientes(pacientesHospitalPrincesa);
    }
}

//////////EVENTO EDADMINIMA Y MAXIMA

let selectorEdadMinima = document.getElementById('edadMinima');
let selectorEdadMaxima = document.getElementById('edadMaxima');
let btnEdad = document.getElementById('btn');

btnEdad.addEventListener('click', recogerRangoEdad);

function recogerRangoEdad(event) {
    event.preventDefault();

    let edadMinima = selectorEdadMinima.value //objeto.propiedad
    let edadMaxima = selectorEdadMaxima.value


    if (edadMinima === "" || edadMaxima === "") {
        alert('los campos edad son obligatorios');
    } else if (parseInt(edadMaxima) >= parseInt(edadMinima)) {
        const listaEdades = filtrarEdad(edadMinima, edadMaxima, pacientesHospitalPrincesa);
        pintarListapacientes(listaEdades);
    } else {
        alert('La edad MAXIMA tiene que ser mayor que edad MINIMA');
    }
}

////////EVENTO BUSCAR POR NOMBRE
let inputNombre = document.getElementById('search');
inputNombre.addEventListener('input', recogerDatosInput);
function recogerDatosInput(event) {
    if (event.target.value !== "") {
        let listaPorNombresFiltrada = buscarPorPalabra(event.target.value, pacientesHospitalPrincesa)
        pintarListapacientes(listaPorNombresFiltrada);
    } else {
        pintarListapacientes(pacientesHospitalPrincesa);
    }
}





