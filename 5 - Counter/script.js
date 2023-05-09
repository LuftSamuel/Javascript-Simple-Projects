function changeCount(v){
    val = document.getElementById('count').innerText 

    if(v > 0){
        val++
    }else{
        val--
    }

    document.getElementById('count').innerText = val
}