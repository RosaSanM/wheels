"use strict";
//VARIABLES
//Global
var car;
var wheels = new Array();
var cars = new Array();
//Car elements   
var newPlate = document.getElementById("plate").value;
var newBrand;
var newColor;
//Wheels elements
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
var inputs = (document.querySelectorAll("form-control"));
//FUNCTIONS
/*function validatePlate(){
  let regexPlate = /[a-zA-Z]{4}[0-9]{3}$/;
  plate = (document.getElementById("plate") as HTMLFormElement).value;
  
  if(!(regexPlate.test(plate.value))){
    console.log('mal')
    document.getElementById('plate')?.classList.add('is-invalid');
  }else{
    createCar();
    vanish()
  }
}*/
//Hidden form
function vanish() {
    var _a;
    (_a = document.querySelector('.create-car')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
}
//Create car
function createCar() {
    //get value of inputs
    newPlate = document.getElementById("plate").value;
    newBrand = document.getElementById("brand").value;
    newColor = document.getElementById("color").value;
    //second validate
    if (typeof (newPlate) === 'string' && typeof (newBrand) === 'string' && typeof (newColor) === 'string') {
        //create object and add to array
        car = new Car(newPlate, newColor, newBrand);
        createWheel();
        cars.push(car);
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
//LISTENERS
//validate first form
inputs.forEach(function (input) {
    input.addEventListener("keyup", validateForm);
    input.addEventListener("blur", validateForm);
});
function validateForm() {
    inputs.forEach(function (input) {
        if (input.checkValidity() === false) {
            input.classList.add('is-invalid');
        }
    });
}
buttonCar.addEventListener('click', function (e) {
    e.preventDefault();
    validatePlate();
    //llamar a validacion!!
});
//create object
buttonWheel.addEventListener('click', function (e) {
    e.preventDefault();
    createCar();
});
