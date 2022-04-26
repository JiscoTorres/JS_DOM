// As funcionalidades adicionadas se encontram entre as linhas:
/* ---->  32-39   Funcionalidade para salvar as mudanças feitas em determinado item */
/* ---->  76-84   Funcionalidade da Edição de cada item - Em conjunto ao Botão de Editar*/

/* PARA CRIAR OS BOTÕES DE EDIT E APPLY, basta copiar as configurações de criação dos botões de Delet e Submit, fazendo as alterações nescessárias. */

function DeleteItem(){ //JÁ EXISTENTE
    console.log(this.parentElement)
    this.parentElement.remove()
}


function Submit(){ //JÁ EXISTENTE
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}


/* ADICIONADO */

function ApplyItem(){
    const Apply_new_config = this.parentElement.firstChild /* Retornará o primeiro elemento do filho de Apply_New_Config */
    const item_selecionado = this.parentElement

    item_selecionado.innerHTML = Apply_new_config.value /* Adicionará o novo valor do item da lista, assim excluindo o valor passado deste item em específico.  */
    item_selecionado.appendChild(CriarBotaoDelete())
    item_selecionado.appendChild(CriarBotaoEdit())
}


function CriarBotaoEdit(){ // Modifiquei as Especificações
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-outline-primary")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem); 

    return botao_edit
}


function CriarBotaoDelete(){ // JÁ EXISTENTE
    const botao_delete =  document.createElement('button') //cria elemento tipo botao
    botao_delete.classList.add("btn", "btn-outline-danger") //atribui 2 classes para o botao 
    botao_delete.innerHTML = "Delete" //insere o texto de delete no botao
    botao_delete.type = "button" // deixa o botão como tipo button
    botao_delete.addEventListener("click", DeleteItem) //Se houver o evento clique nele, chama a função de DeleteItem
    
    return botao_delete
}


function ApplyChangesButton(){ // Modifiquei as Especificações
    const botao_apply = document.createElement('button')
    botao_apply.classList.add("btn", "btn-outline-secondary")
    botao_apply.innerHTML = "Apply Changes"
    botao_apply.type = "button"
    botao_apply.addEventListener("click", ApplyItem); 

    return botao_apply
}


/* ADICIONADO */
function EditItem(){
    const Input_edicao = document.createElement('input')
    const item_selecionado = this.parentElement

    item_selecionado.innerHTML = '' /* Serve para a caixa de input ter um valor vazio, para que assim ela valide o valor vindo do SUBMIT.  Se colocar espaço estre as aspas únicas dará erro! */
    item_selecionado.appendChild(Input_edicao)
    item_selecionado.appendChild(ApplyChangesButton()) /* Quando o botão de EDIT for acionado, o único botão que estará do lado do input será o botão de APPLY */
}





// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
