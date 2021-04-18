"use strict";
//VARIABLES
//Global
let car;
let wheels = new Array();
let show;
const cars = new Array();
//boolean validate   
let carTrue = false;
let wheelTrue = false;
//buttons
let buttonCar = document.getElementById('car');
let buttonWheel = document.getElementById('rueda');
let buttonNewCar = document.getElementById('addCar');
//FUNCTIONS
//Hidden forms
function hideCar() {
    var _a, _b;
    if (carTrue) {
        (_a = document.querySelector('.create-car')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('#wheels-form')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
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
    var _a;
    //get value of inputs
    let newPlate = document.getElementById("plate").value;
    let newBrand = document.getElementById("brand").value;
    let newColor = document.getElementById("color").value;
    // validate
    if (wheelTrue) {
        let i;
        //create object and add to array
        car = new Car(newPlate, newColor, newBrand);
        createWheel();
        cars.push(car);
        hideWheel();
        (_a = document.getElementById('car-form')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        //show data car
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').innerHTML += `Coche para reparar: <br>    
      Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>      
      Rueda 1 => Diametro: ${car.wheels[0].diameter}, marca: ${car.wheels[0].brand} <br>
      Rueda 2 => Diametro: ${car.wheels[1].diameter}, marca: ${car.wheels[1].brand} <br>
      Rueda 3 => Diametro: ${car.wheels[2].diameter}, marca: ${car.wheels[2].brand} <br>
      Rueda 4 => Diametro: ${car.wheels[3].diameter}, marca: ${car.wheels[3].brand} <br><br><br>`;
    }
    else {
        hideWheel();
    }
}
//Create wheel
function createWheel() {
    //wheel values
    let diameter1 = document.getElementById('diameter1').value;
    let brand1 = document.getElementById('brand1').value;
    let diameter2 = document.getElementById('diameter2').value;
    let brand2 = document.getElementById('brand2').value;
    let diameter3 = document.getElementById('diameter3').value;
    let brand3 = document.getElementById('brand3').value;
    let diameter4 = document.getElementById('diameter4').value;
    let brand4 = document.getElementById('brand4').value;
    //create object and add
    let wheel1 = new Wheel(diameter1, brand1);
    car.addWheel(wheel1);
    let wheel2 = new Wheel(diameter2, brand2);
    car.addWheel(wheel2);
    let wheel3 = new Wheel(diameter3, brand3);
    car.addWheel(wheel3);
    let wheel4 = new Wheel(diameter4, brand4);
    car.addWheel(wheel4);
}
//Add new car clean forms
function addNewCar() {
    var _a, _b, _c;
    //reset forms and classes of the inputs
    (_a = document.getElementById('car-form')) === null || _a === void 0 ? void 0 : _a.reset();
    (_b = document.getElementById('wheels-form')) === null || _b === void 0 ? void 0 : _b.reset();
    let formInputs = document.getElementsByClassName('is-valid');
    Array.from(formInputs).forEach((element) => element.classList.remove('is-valid'));
    //show car form   
    (_c = document.querySelector('.create-car')) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
}
//VALIDATES
//validate plate
function validatePlate() {
    var _a, _b, _c, _d;
    let regexPlate = /[a-zA-Z]{4}[0-9]{3}$/;
    let newPlate = document.getElementById("plate").value;
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
    let newColor = document.getElementById("color").value;
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
    let newBrand = document.getElementById("brand").value;
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
            (_a = document.getElementById(`${id}`)) === null || _a === void 0 ? void 0 : _a.classList.add('is-invalid');
            (_b = document.getElementById(`${id}`)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
            wheelTrue = false;
        }
        else {
            (_c = document.getElementById(`${id}`)) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
            (_d = document.getElementById(`${id}`)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
            wheelTrue = true;
        }
    }
}
//LISTENERS
//car button
buttonCar.addEventListener('click', (e) => {
    e.preventDefault();
    //comprobar campos
    hideCar();
});
//create object
//wheel button
buttonWheel.addEventListener('click', (e) => {
    e.preventDefault();
    createCar();
});
//Another car
//newCar button
buttonNewCar.addEventListener('click', (e) => {
    var _a;
    e.preventDefault();
    //hide button
    (_a = document.getElementById('addCar')) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
    //call form
    addNewCar();
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
