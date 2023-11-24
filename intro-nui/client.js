onNet('nui:notificacao', (tipoIcone, msg, tempoe)=>{
    dados = {icone: tipoIcone, mensagem: msg, tempo: tempoe}
    SendNUIMessage(dados)
})