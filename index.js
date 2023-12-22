const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const button = document.getElementById("btn");

// localStorage.clear(); //to clearing until the delete button is not made by me 

//step 3 : go first read step 1 and 2 then come here 
const task = Object.keys(localStorage);
// console.log(typeof (localStorage));
// console.log(task);
function displayall() {
    task.forEach((val) => {
        taskadd(val);
    })
}
displayall();

// to follow dry principle made this taskadd function as it is used in the bottom

function taskadd(tittle) {
    let x = tittle;
    let y = localStorage.getItem(x);
    const outerdiv = document.createElement("div");
    const innerdiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const minusbtn = document.createElement("button");
    outerdiv.className = "task";
    minusbtn.className = "deleteBtn";
    h2.id="mytittle";
    h2.innerText = x;
    p.innerText = y;
    innerdiv.append(h2);
    innerdiv.append(p);
    outerdiv.append(innerdiv);
    outerdiv.append(minusbtn);
    container.append(outerdiv);
}



// step1 : took the value in the input tag 

let a;
let b;

const pr = new Promise((resolve, reject) => {
    form.addEventListener("submit", (e) => {
        // e.preventDefault();
        a = title.value;
        b = description.value;
        resolve("ok work done");
    });
    // resolve("ok work done"); you cant keep it here else it will go out before submit has happened
})
pr.then(() => {
    // console.log(a);
    // console.log(b);

    //step 2 : keeping the key in the array and key:value in the local storage 
    // key->>> task_name and value->> description
    localStorage.setItem(a, b);
})
.then(() => {
    //step4 : either i can use reload page or i am adding just one element 
    taskadd(a);
    // or (bom reload functionality)
    // location.reload();
})


//step 5: delete button functionality
// i have shown reload functionality here 
const deletebutton=document.querySelector(".deleteBtn");
if(deletebutton){
    deletebutton.addEventListener("click",()=>{
        const a=document.getElementById("mytittle");
        // console.log(a.innerText);
        localStorage.removeItem(a.innerText);
        location.reload();
    });
}