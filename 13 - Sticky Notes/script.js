const container2 = document.getElementsByClassName('container2')[0]
const container3 = document.getElementsByClassName('container3')[0]
const checkIcon = document.getElementById('check-icon')
const xIcon = document.getElementById('x-icon')
let indice_color = 0

xIcon.addEventListener('click', function(){
    typeNote()
})

checkIcon.addEventListener('click', function(){
    createNote()
})

function typeNote(){
    if(container3.style.display != 'block'){
        container3.style.display = 'block'
    }else{
        container3.style.display = 'none'
    }
}

function createNote(){
    var noteText = document.getElementById('note-text').value

    if(noteText != ''){

        var node0 = document.createElement('div')
        var node1 = document.createElement('h1')
        
        node1.innerHTML = noteText
        
        node1.setAttribute('style', 'width:250px; height:250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75); ')
        
        node1.style.margin = margin()
        node1.style.rotate = rotate()
        node1.style.background = color()
        
        node0.appendChild(node1)
        
        container2.insertAdjacentElement('beforeend', node0)
        
        node0.addEventListener('mouseenter', function(){
            node0.style.transform = 'scale(1.1)'
        })
        
        node0.addEventListener('mouseleave', function(){
            node0.style.transform = 'scale(1)'
        })
        
        node0.addEventListener('dblclick', function(){
            node0.remove()
        })
        
        document.getElementById('note-text').value = ''
    }
}

function margin(){
    let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px']

    return random_margin[Math.floor(Math.random() * random_margin.length)]
}

function rotate(){
    let random_rotate = ['3deg', '1deg', '-1deg', '-3deg', '-5deg', '-10deg']
    
    return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color(){
    let color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

    if(indice_color > color.length - 1){
        indice_color = 0
    }

    return color[indice_color++];
}