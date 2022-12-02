
//definisco vettore
const list = ['pecorino','pasta','guanciale','nutella','latte','carne']


const spesa_list = document.querySelector(".list")
let i = 0;
while(i<list.length){
    const li = document.createElement("li");
    li.innerHTML = list[i];
    spesa_list.append(li);
    i++;
}