window.addEventListener("load", function () {

    const cont = document.getElementById('cont');
    let tarea = document.getElementById('tarea');

    document.getElementById('addtarea').addEventListener('click', function () {
        const txt = document.getElementById('txt').value;
        if (txt == "") {
            alert('rellena los campos!')
        }else{
            const p = document.createElement('p');
            let tareaCopia = tarea.cloneNode(true)
            p.textContent = txt;
            tareaCopia.children[0].replaceChildren(p);
            tareaCopia.children[1].replaceChildren(btnBorrar());
            tareaCopia.className = 'tarea nueva';
            cont.appendChild(tareaCopia);
            tarea.children[0].children[0].value = '';
        }
    })

    function btnBorrar() {
        const btnB = document.createElement("button");
        btnB.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnB.className = 'btnBorrar';
        btnB.addEventListener("click",(e)=>{
            const item = e.target.parentElement.parentElement.parentElement;
            const check = item.className
            console.log(check);
            if (check === "tarea nueva") {
                item.remove();
            }
        });
        return btnB;
    }

}); 
