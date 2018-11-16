let allowedoperators = '+-/*=.%';
let calculteDone = false;

//Keyboard key

document.onkeydown = function (evt) {
    if (isNaN(evt.key)) {
        if (allowedoperators.indexOf(evt.key) == -1)
            return;
    }
    if (evt.key == '=') {
        calculteDone = true;
        total();
    } else {

        if (calculteDone) {
            document.form.text1.value = "";
            calculteDone = false;
        }
        document.form.text1.value += evt.key;

    }
}


//calculator functions

function put(val) {                  //insert value
    document.form.text1.value = document.form.text1.value + val;
}

function total() {                   //total amount
    let totalvalue = document.form.text1.value;
    if (totalvalue) {
        document.form.text1.value = eval(totalvalue);
    }
}

function clr() {                 //clear all values
    document.form.text1.value = "";
}

function back() {               //remove value 
    let totalvalue = document.form.text1.value;
    document.form.text1.value = totalvalue.substring(0, totalvalue.length - 1);
}

