"use strict";
//VARIABLES
//Global
var car;
var wheels = new Array();
var show;
var cars = new Array();
//Car elements   
var newPlate;
var newBrand;
var newColor;
var carTrue = false;
//Wheels elements
var wheelTrue = false;
var diameter1;
var brand1;
var diameter2;
var brand2;
var diameter3;
var brand3;
var diameter4;
var brand4;
//buttons
var buttonCar = document.getElementById('car');
var buttonWheel = document.getElementById('rueda');
//FUNCTIONS
//Hidden form
function hideCar() {
    var _a;
    if (carTrue) {
        (_a = document.querySelector('.create-car')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        carTrue = false;
    }
    else if (!carTrue) {
        alert("rellena bien los campos");
    }
}
function hideWheel() {
    var _a, _b;
    if (wheelTrue) {
        (_a = document.querySelector('#wheels-form')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('#addCar')) === null || _b === void 0 ? void 0 : _b.classList.add('show');
    }
    else if (!wheelTrue) {
        alert("rellena bien los campos");
    }
}
//Create car
function createCar() {
    //get value of inputs
    newPlate = document.getElementById("plate").value;
    newBrand = document.getElementById("brand").value;
    newColor = document.getElementById("color").value;
    //second validate
    //if (typeof (newPlate) === 'string' && typeof (newBrand) === 'string' && typeof (newColor) === 'string') {
    if (wheelTrue) {
        //create object and add to array
        car = new Car(newPlate, newColor, newBrand);
        createWheel();
        cars.push(car);
        hideWheel();
    }
    else {
        hideWheel();
    }
}
//Create wheel
function createWheel() {
    //wheel values
    var diameter1 = document.getElementById('diameter1').value;
    var brand1 = document.getElementById('brand1').value;
    var diameter2 = document.getElementById('diameter2').value;
    var brand2 = document.getElementById('brand2').value;
    var diameter3 = document.getElementById('diameter3').value;
    var brand3 = document.getElementById('brand3').value;
    var diameter4 = document.getElementById('diameter4').value;
    var brand4 = document.getElementById('brand4').value;
    //create object and add
    var wheel1 = new Wheel(diameter1, brand1);
    car.addWheel(wheel1);
    var wheel2 = new Wheel(diameter2, brand2);
    car.addWheel(wheel2);
    var wheel3 = new Wheel(diameter3, brand3);
    car.addWheel(wheel3);
    var wheel4 = new Wheel(diameter4, brand4);
    car.addWheel(wheel4);
}
//VALIDATES
//validate plate
function validatePlate() {
    var _a, _b, _c, _d;
    var regexPlate = /[a-zA-Z]{4}[0-9]{3}$/;
    newPlate = document.getElementById("plate").value;
    if (!(regexPlate.test(newPlate))) {
        (_a = document.getElementById('plate')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('plate')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carTrue = false;
    }
    else if (regexPlate.test(newPlate)) {
        (_c = document.getElementById('plate')) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById('plate')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
        carTrue = true;
    }
}
//Validate color
function validateColor() {
    var _a, _b, _c, _d;
    newColor = document.getElementById("color").value;
    if (newColor === "") {
        (_a = document.getElementById('color')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('color')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carTrue = false;
    }
    else {
        (_c = document.getElementById('color')) === null || _c === void 0 ? void 0 : _c.classList.remove('is-invalid');
        (_d = document.getElementById('color')) === null || _d === void 0 ? void 0 : _d.classList.add('is-valid');
        carTrue = true;
    }
}
//Validate brand 
function validateBrand() {
    var _a, _b, _c, _d;
    newBrand = document.getElementById("brand").value;
    if (newBrand === "") {
        (_a = document.getElementById('brand')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('brand')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carTrue = false;
    }
    else {
        (_c = document.getElementById('brand')) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById('brand')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
        carTrue = true;
    }
}
//Validate wheels
function validateWheel(e) {
    switch (e.target.name) {
        case "diameter":
            validateDiameter(e.target.value, e.target.id);
            break;
        case "brand":
            validateEmpty(e.target.value, e.target.id);
            break;
    }
    function validateDiameter(input, id) {
        var _a, _b, _c, _d;
        if (input < 0.4 || input > 2 || input == undefined) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('is-invalid');
            (_b = document.getElementById(id)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
            wheelTrue = false;
        }
        else {
            (_c = document.getElementById(id)) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
            (_d = document.getElementById(id)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
            wheelTrue = true;
        }
    }
    function validateEmpty(input, id) {
        var _a, _b, _c, _d;
        if (input === "") {
            (_a = document.getElementById("" + id)) === null || _a === void 0 ? void 0 : _a.classList.add('is-invalid');
            (_b = document.getElementById("" + id)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
            wheelTrue = false;
        }
        else {
            (_c = document.getElementById("" + id)) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
            (_d = document.getElementById("" + id)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
            wheelTrue = true;
        }
    }
}
//LISTENERS
//car button
buttonCar.addEventListener('click', function (e) {
    e.preventDefault();
    //comprobar campos
    hideCar();
    //llamar a validacion!!
});
//create object
//wheel button
buttonWheel.addEventListener('click', function (e) {
    e.preventDefault();
    createCar();
});
//validate inputs car
document.getElementById("plate").addEventListener('keyup', validatePlate);
document.getElementById("plate").addEventListener('blur', validatePlate);
document.getElementById("color").addEventListener('keyup', validateColor);
document.getElementById("color").addEventListener('blur', validateColor);
document.getElementById("brand").addEventListener('keyup', validateBrand);
document.getElementById("brand").addEventListener('blur', validateBrand);
//validate inputs wheels
//listeners diameter
document.getElementById("diameter1").addEventListener('keyup', validateWheel);
document.getElementById("diameter1").addEventListener('blur', validateWheel);
document.getElementById("diameter2").addEventListener('keyup', validateWheel);
document.getElementById("diameter2").addEventListener('blur', validateWheel);
document.getElementById("diameter3").addEventListener('keyup', validateWheel);
document.getElementById("diameter3").addEventListener('blur', validateWheel);
document.getElementById("diameter4").addEventListener('keyup', validateWheel);
document.getElementById("diameter4").addEventListener('blur', validateWheel);
//listeners brand
document.getElementById("brand1").addEventListener('keyup', validateWheel);
document.getElementById("brand1").addEventListener('blur', validateWheel);
document.getElementById("brand2").addEventListener('keyup', validateWheel);
document.getElementById("brand2").addEventListener('blur', validateWheel);
document.getElementById("brand3").addEventListener('keyup', validateWheel);
document.getElementById("brand3").addEventListener('blur', validateWheel);
document.getElementById("brand4").addEventListener('keyup', validateWheel);
document.getElementById("brand4").addEventListener('blur', validateWheel);
//let inputsDiameter = [(document.getElementsByClassName("diameter"))];
/*let inputsLength = inputs.length;
for(let element of inputsDiameter){
  element.addEventListener()
}

for(let i = 0; i<=inputsLength; i++){
  inputsDiameter[i].addEventListener()
}*/
