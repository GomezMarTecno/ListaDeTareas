const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text =input.value;

    if (text !== "") {

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    //LL//
    li.appendChild(addDeletBtn());
    ul.appendChild(li);


    input.value ="";
    empty.style.display = "none";
    }


});


function addDeletBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        ul.removeChild(li);

        const items = document.querySelectorAll('li');
        
        if(items.length === 0) {
            empty.style.display = "block";
        }
    });
    
    return deleteBtn  //ACA LO CONECTO CON  LL (arriba)
}

// const divCont = document.getElementById('liCont');
// divCont.appendChild(deleteAll());

// function deleteAll(){
//     const allBtn = document.createElement('button');

//     allBtn.textContent ="Borrar Todo"
//     allBtn.className = "all-delete-btn"

        

    
//     allBtn.addEventListener("click", (e) =>{
//         const todasLasListas = e.target.parentElement;
//         ul.remove(allBtn);

//     });
//     return allBtn


// }
