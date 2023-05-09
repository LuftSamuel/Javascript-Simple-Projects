document.getElementById('message-input').addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        getMessage()
    }
})

function getMessage(){
    //obtengo el valor del input
    const message = document.getElementById('message-input').value
    //inserto ese valor en el parrafo correspondiente
    document.getElementById('message-output').innerText = message
    //borro el valor del input
    document.getElementById('message-input').value = ''
}