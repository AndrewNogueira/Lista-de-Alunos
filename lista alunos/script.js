let listaAlunos = []

function adicionarAluno() {
    let inpAluno = document.getElementById("inp")
    let listAluno = inpAluno.value.trim()

    let inpNota = document.getElementById("inpNota")
    let listNota =  parseFloat(inpNota.value.trim())

    let inpNota1 = document.getElementById("inpNota1")
    let listNota1 = parseFloat(inpNota1.value.trim())

    mensagem = document.getElementById("mensagem")    
    
    if (listAluno == "" || isNaN(listNota) || isNaN(listNota1)) {
        let mensagemError = "Preencha todos os campos corretamente"        
        mensagem.textContent = mensagemError        
    }else {
        let media = (listNota + listNota1)/2
        let mensagemSucesso = "Aluno adicionado com sucecesso"
        mensagem.textContent = mensagemSucesso

        listaAlunos.push({aluno: listAluno, media: media})        
        renderizarLista()         
    }
       limparCampos()
}

function limparCampos() {
    document.getElementById("inp").value = ""
    document.getElementById("inpNota").value = ""
    document.getElementById("inpNota1").value = ""
}

function renderizarLista() {
    const listAprov = document.getElementById("listaAprovado")
    const listReprov = document.getElementById("listaReprovado")

    listAprov.innerHTML = ""
    listReprov.innerHTML = ""
    
    for(let i = 0; i< listaAlunos.length; i++){
        let newAlun = document.createElement("li")        
        newAlun.textContent = `Aluno: ${listaAlunos[i].aluno} | Média: ${listaAlunos[i].media.toFixed(2)}` 

        let buttonRemove = document.createElement("button")
        buttonRemove.className = "remover"
        buttonRemove.textContent = "REMOVER" 
        newAlun.appendChild(buttonRemove)
        buttonRemove.onclick = () => removerAluno(i)

        if(listaAlunos[i].media >= 6){
            listAprov.appendChild(newAlun)
        }else {
            listReprov.appendChild(newAlun)
        }
    }
} 

function removerAluno(i) {
    listaAlunos.splice(i, 1)
    renderizarLista()
}

