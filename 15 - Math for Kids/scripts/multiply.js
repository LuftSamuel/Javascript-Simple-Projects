const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const audioSuccess = document.getElementById('audio-success')
const audioError = document.getElementById('audio-error')
let answer = 0

option1.addEventListener('click', function(){
    if(option1.innerHTML == answer){
        audioSuccess.play()
        setTimeout(() => {
            generate_equation()
        }, 1000);
    }else{
        audioError.play()
    }
})

option2.addEventListener('click', function(){
    if(option2.innerHTML == answer){
        audioSuccess.play()
        setTimeout(() => {
            generate_equation()
        }, 1000);
    }else{
        audioError.play()
    }
})

option3.addEventListener('click', function(){
    if(option3.innerHTML == answer){
        audioSuccess.play()
        setTimeout(() => {
            generate_equation()
        }, 1000);
    }else{
        audioError.play()
    }
})

function generate_equation(){
    let num1 = Math.floor(Math.random() * 10)
    while(num1 === 0 || num1 === 1){
        num1 = Math.floor(Math.random() * 10)
    }
    let num2 = Math.floor(Math.random() * 10)
    while(num2 === 0 || num2 === 1 || num2){
        num2 = Math.floor(Math.random() * 10)
    }
    let allAnswers = []
    let switchAnswers = []
    
    answer = num1 * num2
    
    let dummyAnswer1 = Math.floor(Math.random() * 10)
    while(dummyAnswer1 === answer){
        dummyAnswer1 = Math.floor(Math.random() * 10)
    }
    let dummyAnswer2 = Math.floor(Math.random() * 10)
    while(dummyAnswer2 === dummyAnswer1 || dummyAnswer2 === answer){
        dummyAnswer2 = Math.floor(Math.random() * 10)
    }

    document.getElementById('num1').innerHTML = num1
    document.getElementById('num2').innerHTML = num2

    allAnswers = [answer, dummyAnswer1, dummyAnswer2]
    
    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0])
    }

    option1.innerHTML = switchAnswers[0]
    option2.innerHTML = switchAnswers[1]
    option3.innerHTML = switchAnswers[2]
}

generate_equation()