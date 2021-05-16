
function filtrarPorDiagnostico(pEnfermedad, pListaHospital) {
    const listaFiltrada = pListaHospital.filter(paciente => paciente.diagnostico.toLowerCase() === pEnfermedad.toLowerCase());
    return listaFiltrada;
}
function filtrarEdad(pEdadMin, pEdadMax, pListaHospital) {
    const edadPaciente = pListaHospital.filter(paciente => paciente.edad >= pEdadMin && paciente.edad <= pEdadMax)
    return edadPaciente;
}

function numSegSocial(pValor, pListaHospital) {
    const pacienteSegSocial = pListaHospital.filter(function (paciente) {
        return paciente.numeroSS.endsWith(pValor);
    })
    return pacienteSegSocial;
}


function buscarPorPalabra(pPalabra, pListaHospital) {
    let palabra = pPalabra.toLowerCase().trim();
    let listaFiltradaNombres = pListaHospital.filter(paciente => {
        return paciente.nombre.toLowerCase().includes(palabra) || paciente.apellido.toLowerCase().includes(palabra);
    })
    return listaFiltradaNombres;
}