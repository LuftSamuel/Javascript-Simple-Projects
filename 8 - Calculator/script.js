let string = ''

function press(v) {
    document.getElementById('userInput').value = string

    let lastChar = document.getElementById('userInput').value.substr(document.getElementById('userInput').value.length - 1)

    if(isNaN(parseInt(v)) && isNaN(parseInt(lastChar))){
        document.getElementById('userInput').value = document.getElementById('userInput').value.slice(0, -1)
    }
    
    document.getElementById('userInput').value += v

    string = document.getElementById('userInput').value
}

function equal() {
    document.getElementById('userInput').value = eval(document.getElementById('userInput').value)
    string = ''
}

function erase() {
    document.getElementById('userInput').value = 0
    string = ''
}
