function generateQuote(){
    let quotes = {
        "-Author one" : '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolore repudiandae aliquam dolorem ab qui iure perferendis"',
        "-Author two" : '"    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptas aliquid eius"',
        "-Author three" : '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laboriosam esse dolore doloremque delectus commodi. Praesentium!"'
    }
    let authors = Object.keys(quotes)
    
    //math floor elimina decimales
    //math random genera un numero aleatorio entre 0 y 1 (varias decimales)
    let author = authors[Math.floor(Math.random() * authors.length)]

    let quote = quotes[author]

    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = author
}