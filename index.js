let countEl = document.getElementById("count-el")
let count= 0
let less = count
let val=0

let saveEl=document.getElementById("save-el")

function increment() {
    console.log("the button was clicked")
    count += 1 
    countEl.textContent = count 
   

}

function decrement() {
    console.log("decrease count")
    less = countEl.innerText-1
    countEl.textContent = less


}

function save(){
    console.log("saved your data ")
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count=0

}

