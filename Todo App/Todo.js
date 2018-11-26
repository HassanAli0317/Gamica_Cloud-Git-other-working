// function Todo(){
//     var x = document.getElementById('userinput').value;
//     document.getElementById('item').innerHTML = x;
// }


let myNodeItems = document.getElementsByTagName('LI');
for (let i = 0; i < myNodeItems.length; i++) {
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = "close";
  span.appendChild(txt);
  myNodeItems[i].appendChild(span);
}


//hide the item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//item update or checked item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function Todo() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("userinput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Enter your item");
  } else {
    document.getElementById("itemlist").appendChild(li);
  }
  document.getElementById("userinput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//press keyboard key Enter to add item
document.onkeydown = function (evt) {
  if (evt.key == 'Enter') {
    Todo();
  }
}

