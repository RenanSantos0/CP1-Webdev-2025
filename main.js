function calcular() {
    let horaIni = parseInt(document.querySelector("#horaIni").value)
    let minIni = parseInt(document.querySelector("#minIni").value)
    let horaFim = parseInt(document.querySelector("#horaFim").value)
    let minFim = parseInt(document.querySelector("#minFim").value)
    let horas = document.querySelector("#horas")
    let minutos = document.querySelector("#minutos")

    let horaReuniao
    if (horaFim >= horaIni) {
        horaReuniao = (horaFim - horaIni)
    } else if (horaIni > horaFim) {
        horaReuniao = ((horaFim + 24) - horaIni)
    } else{
        alert("ERRO: Digite horários válidos!")
    }

    let minReuniao
    if (minFim >= minIni) {
        minReuniao = (minFim - minIni)
    } else if (minIni > minFim) {
        minReuniao = (minIni - minFim)
    }else{
        alert("ERRO: Digite horários válidos!")
    }

    if (horaReuniao < 10){
        horas.textContent = "0"+horaReuniao
    } else {
        horas.textContent = horaReuniao
    }

    if (minReuniao < 10){
        minutos.textContent = "0"+minReuniao
    } else {
        minutos.textContent = minReuniao
    }
    
}