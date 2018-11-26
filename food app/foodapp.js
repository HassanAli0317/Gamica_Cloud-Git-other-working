

// for(let i = 4; i<10; i++){
//     console.log(i);
// }


function findDish(name) {
    let allDishes = document.getElementsByClassName('menuName');

    for (var i = 0; i < allDishes.length; i++) {
        if (allDishes[i].innerHTML == name) {
            return allDishes[i];
        }
    }
}

let orderedDishes = [];
let savedDishes = localStorage.getItem('savedDishes');

//class define
class Dish {
    constructor(name, price, qty, bill) {
        this.dishName = name;
        this.dishPrice = price;
        this.dishQty = qty;
        this.dishBill = bill;
    }
}

if (savedDishes) {
    orderedDishes = JSON.parse(savedDishes);

    orderedDishes.forEach(function (mDish) {
        // console.log(mDish.name);
        let tdTag = findDish(mDish.dishName);
        tdTag.nextElementSibling.querySelector('input').checked = true;
    })
}

function dataSave() {
    localStorage.setItem('savedDishes', JSON.stringify(orderedDishes));
}

function calculateBill() {
    orderedDishes.length = 0;
    let dishes = document.querySelectorAll('.dish');

    let totalBill = 0;
    dishes.forEach(function (dish) {

        if (dish.checked) {
            let price = +dish.parentNode.nextElementSibling.innerText;
            let qty = +dish.parentNode.nextElementSibling.nextElementSibling.querySelector('input').value;
            totalBill += price * qty;


            // let orderedDish = {
            //     name: dish.parentNode.previousElementSibling.innerText,
            //     price: price,
            //     qty: qty,
            //     bill: price * qty
            // };

            let orderedDish = new Dish(dish.parentNode.previousElementSibling.innerText, price, qty, price * qty);

            orderedDishes.push(orderedDish);

            dataSave();
        }
    });
    // console.log(totalBill);

    //Discount & Generate Total bill
    gBill.innerText = totalBill;
    let discount = 0;

    if (totalBill > 500) {
        discount = totalBill * 0.15;
    }

    disBill.innerText = discount;
    tBill.innerText = totalBill - discount;
}

//On key press when Enter press calculate Bill
document.onkeydown = function (evt) {
    if (evt.key == 'Enter') {
        calculateBill();
    }
}


//1-show the expensive dishes in only menu 

// let dishesprice = document.querySelectorAll('.dishprice');
// let itemArray = [];

// dishesprice.forEach(function (item){
//     itemArray.push(item);
// });

// let Price = itemArray.filter(function (item){
//     if(item.className = 'dishprice') {
//         if(item.innerHTML > 200){
//         return true;
//         }
//     }
//     else{
//         return false;
//     }
// });

// function expDishes(){
//     document.getElementById('new-div').innerHTML = '';
//     let table = document.createElement('table');
//     Price.forEach(function (array){
//         let tr = document.createElement('tr');
//         let menuTd = document.createElement('td');
//         let priceTd = document.createElement('td');
//         priceTd.innerHTML = array.innerHTML;
//         menuTd.innerHTML = array.parentElement.firstElementChild.innerHTML;
//         tr.appendChild(menuTd);
//         tr.appendChild(priceTd);
//         table.appendChild(tr);                                          //append add tag in last
//         document.getElementById('new-div').appendChild(table);
//     });
// }


//2-show expensive dishes when order

function showexpensiveDishes() {
    myDiv.innerHTML = "";
    let expensiveDishes = orderedDishes.filter(function (dish) {
        if ((dish.dishQty * dish.dishPrice) >= 300) {
            return true;
        }
    });

    expensiveDishes.forEach(function (dish) {
        let newDish = document.createElement('section');
        newDish.innerHTML = '<div id="n1" class="ab">' + dish.dishName + ' ' + (dish.dishQty * dish.dishPrice) + '</div>';
        myDiv.appendChild(newDish);
    });
}











