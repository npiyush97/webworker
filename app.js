const first = document.getElementById('number1')
const second = document.getElementById('number2')

const result = document.querySelector('.result')

if(window.Worker){
    const myWorker = new Worker('worker.js')

    first.onchange = function(){
        myWorker.postMessage([first.value,second.value])
        console.log('Worker working')
    }

    second.onchange = function(){
        myWorker.postMessage([first.value,second.value])
        console.log('Worker working')
    }

    myWorker.onmessage = function(e){
        result.textContent = e.data
        console.log("worker's done")
    }

}
else{
    console.log("worker doesn't like you /n web worker not supported")
}







