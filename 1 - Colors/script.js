var index = 0;

function changeColors(){
    let colors = ['red', 'green', 'purple', 'blue', 'orange'];

    document.getElementsByTagName('body')[0].style.background = colors[index];
    index++;

    if(index > colors.length - 1 ){
        index = 0;
    }
}