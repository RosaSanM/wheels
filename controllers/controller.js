"use strict";
//VARIABLES
//Global
let car;
let wheels = new Array();
const cars = new Array();
//buttons
let buttonCar = document.getElementById('car');
let buttonWheel = document.getElementById('rueda');
let buttonNewCar = document.getElementById('addCar');
//booleans
let carColor = false;
let carBrand = false;
let carPlate = false;
//VALIDATES
//validate plate
function validatePlate() {
    var _a, _b, _c, _d;
    let regexPlate = /[a-zA-Z]{4}[0-9]{3}$/;
    let newPlate = document.getElementById("plate").value;
    if (!(regexPlate.test(newPlate))) {
        (_a = document.getElementById('plate')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('plate')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carPlate = false;
    }
    else if (regexPlate.test(newPlate)) {
        (_c = document.getElementById('plate')) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById('plate')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
        carPlate = true;
    }
}
//Validate color
function validateColor() {
    var _a, _b, _c, _d;
    let newColor = document.getElementById("color").value;
    if (newColor === "") {
        (_a = document.getElementById('color')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('color')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carColor = false;
    }
    else {
        (_c = document.getElementById('color')) === null || _c === void 0 ? void 0 : _c.classList.remove('is-invalid');
        (_d = document.getElementById('color')) === null || _d === void 0 ? void 0 : _d.classList.add('is-valid');
        carColor = true;
    }
}
//Validate brand 
function validateBrand() {
    var _a, _b, _c, _d;
    let newBrand = document.getElementById("brand").value;
    if (newBrand === "") {
        (_a = document.getElementById('brand')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('brand')) === null || _b === void 0 ? void 0 : _b.classList.add('is-invalid');
        carBrand = false;
    }
    else {
        (_c = document.getElementById('brand')) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById('brand')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
        carBrand = true;
    }
}
//Validate wheels
function validateWheel(e) {
    if (e.target.name === 'diameter') {
        let input = e.target.value;
        let id = e.target.id;
        validateDiameter(input, id);
    }
    else if (e.target.name === 'brand') {
        let input = e.target.value;
        let id = e.target.id;
        validateWheelBrand(input, id);
    }
}
function validateDiameter(input, id) {
    var _a, _b, _c, _d;
    if (input < 0.4 || input > 2 || input == undefined) {
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('is-invalid');
        (_b = document.getElementById(id)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
    }
    else {
        (_c = document.getElementById(id)) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById(id)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
    }
}
function validateWheelBrand(input, id) {
    var _a, _b, _c, _d;
    if (input === "") {
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('is-invalid');
        (_b = document.getElementById(id)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
    }
    else {
        (_c = document.getElementById(id)) === null || _c === void 0 ? void 0 : _c.classList.add('is-valid');
        (_d = document.getElementById(id)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-invalid');
    }
}
//validate empty inputs, choose diameter or brand input and call function validates
function validateEmpty() {
    let inputs = document.querySelectorAll('input');
    Array.from(inputs).forEach((element) => {
        if (element.name === 'diameter') {
            let input = element.value;
            let id = element.id;
            validateDiameter(input, id);
        }
        else if (element.name === 'brand') {
            let input = element.value;
            let id = element.id;
            validateWheelBrand(input, id);
        }
    });
}
//FUNCTIONS
//Create car
function createCar() {
    var _a;
    let counter = 0;
    // validate
    let formWheels = document.getElementById('wheels-form');
    Array.from(formWheels).forEach((element) => {
        let notValidInput = element.classList.contains('is-invalid');
        if (notValidInput) {
            counter++;
        }
    });
    let formCar = document.getElementById('wheels-form');
    Array.from(formCar).forEach((element) => {
        let notValidInput = element.classList.contains('is-invalid');
        if (notValidInput) {
            counter++;
        }
    });
    if (counter === 0) {
        //get value of inputs
        let newPlate = document.getElementById("plate").value;
        let newBrand = document.getElementById("brand").value;
        let newColor = document.getElementById("color").value;
        //create object and add to array
        car = new Car(newPlate, newColor, newBrand);
        createWheel();
        cars.push(car);
        (_a = document.getElementById('car-form')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        //show data car
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').innerHTML += `<br>Coche para reparar: <br>    
    Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>`;
        for (let i = 0; i <= 4; i++) {
            document.getElementById('result').innerHTML +=
                `Rueda ${i + 1} => Diametro: ${car.wheels[i].diameter}, marca: ${car.wheels[i].brand} <br>`;
        }
    }
    else {
        validateEmpty();
    }
}
//Create wheel
function createWheel() {
    var _a, _b;
    //wheel values
    //create object and add
    for (let i = 1; i <= 4; i++) {
        let brandWheel = document.getElementById("brand" + i).value;
        let diameterWheel = document.getElementById("diameter" + i).value;
        let wheel = new Wheel(diameterWheel, brandWheel);
        car.addWheel(wheel);
        (_a = document.querySelector('#wheels-form')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('#addCar')) === null || _b === void 0 ? void 0 : _b.classList.add('show');
    }
}
//Hidden forms
function hideCar() {
    var _a, _b;
    if (carColor && carBrand && carPlate) {
        (_a = document.querySelector('.create-car')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.querySelector('#wheels-form')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        carColor = false;
        carBrand = false;
        carPlate = false;
    }
    else {
        alert("rellena bien los campos");
    }
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
//BUTTONS
//car button
buttonCar.addEventListener('click', (e) => {
    e.preventDefault();
    //check validations for empty inputs
    validatePlate();
    validateColor();
    validateBrand();
    //call function to hide form
    hideCar();
});
//wheel button
buttonWheel.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty();
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
//LISTENERS
//validate inputs car
document.getElementById("plate").addEventListener('keyup', validatePlate);
document.getElementById("plate").addEventListener('blur', validatePlate);
document.getElementById("color").addEventListener('keyup', validateColor);
document.getElementById("color").addEventListener('blur', validateColor);
document.getElementById("brand").addEventListener('keyup', validateBrand);
document.getElementById("brand").addEventListener('blur', validateBrand);
//validate inputs wheels
//listeners diameter
//listeners brand
for (let z = 1; z <= 4; z++) {
    document.getElementById("brand" + z).addEventListener('blur', validateWheel);
    document.getElementById("brand" + z).addEventListener('keyup', validateWheel);
    document.getElementById("diameter" + z).addEventListener('blur', validateWheel);
    document.getElementById("diameter" + z).addEventListener('keyup', validateWheel);
}
/*

//VARIABLES
//Global
let car: Car;
let wheels: Wheel[] = new Array();
let show;
const cars = new Array();
//boolean validate
let carColor: boolean = false;
let carBrand: boolean = false;
let carPlate: boolean = false;
let diameterTrue: boolean = false;
let brandTrue: boolean = false;
//buttons
let buttonCar    = (document.getElementById('car') as HTMLElement);
let buttonWheel  = (document.getElementById('rueda') as HTMLElement);
let buttonNewCar = (document.getElementById('addCar') as HTMLElement);


//FUNCTIONS
//Hidden forms
function hideCar() {
  if(carColor && carBrand && carPlate){
    document.querySelector('.create-car')?.classList.add('hidden');
    document.querySelector('#wheels-form')?.classList.remove('hidden');
    carColor = false;
    carBrand = false;
    carPlate = false;
  }else{
    alert("rellena bien los campos");
  }
}
function hideWheel(){
  if(diameterTrue && brandTrue){
    document.querySelector('#wheels-form')?.classList.add('hidden');
    document.querySelector('#addCar')?.classList.add('show');
    diameterTrue = false;
    brandTrue = false;
    
  }else if(!diameterTrue && !brandTrue){
    alert("rellena bien los campos");
  }
}

//Create car

function createCar() {
  
  
  let counter: number= 0;
  // validate
  let formInputs = document.getElementById('wheels-form') as HTMLFormElement;
  Array.from(formInputs).forEach((element) => {
    let notValidInput = element.classList.contains('is-invalid');
    
    if(notValidInput){
      counter++;
    }
  })
  
  if(counter === 0 && diameterTrue && brandTrue){
    //get value of inputs
    let newPlate = (document.getElementById("plate") as HTMLFormElement).value;
    let newBrand = (document.getElementById("brand") as HTMLFormElement).value;
    let newColor = (document.getElementById("color") as HTMLFormElement).value;
  //create object and add to array
    car = new Car(newPlate, newColor, newBrand);
    createWheel();
    cars.push(car)
    hideWheel();
    (document.getElementById('car-form') as HTMLFormElement)?.classList.remove('is-valid');
    //show data car
    (document.getElementById('result') as HTMLElement).classList.remove('d-none');
    (document.getElementById('result') as HTMLElement).innerHTML += `<br>Coche para reparar: <br>
    Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>`
    for(let i = 0; i <= 4; i++){
      (document.getElementById('result') as HTMLElement).innerHTML +=
      `Rueda ${i+1} => Diametro: ${car.wheels[i].diameter}, marca: ${car.wheels[i].brand} <br>`
    }
    
  }else{
    hideWheel();
  }
}
//Create wheel
function createWheel() {
  //wheel values
  //create object and add
  
  for (let i = 1; i <= 4; i++) {
    let brandWheel: string = (document.getElementById("brand" + i)as HTMLFormElement).value;
    let diameterWheel: number = (document.getElementById("diameter" + i)as HTMLFormElement).value;
    let wheel: Wheel = new Wheel(diameterWheel, brandWheel);
      car.addWheel(wheel);
  }
}


 //Add new car clean forms
 function addNewCar(){

  
  //reset forms and classes of the inputs
  (document.getElementById('car-form') as HTMLFormElement)?.reset();
  (document.getElementById('wheels-form') as HTMLFormElement)?.reset();
  let formInputs = document.getElementsByClassName('is-valid');

    Array.from(formInputs).forEach((element) => element.classList.remove('is-valid'))

  //show car form
  document.querySelector('.create-car')?.classList.remove('hidden');
  
 }
//VALIDATES
//validate plate
function validatePlate() {
  let regexPlate = /[a-zA-Z]{4}[0-9]{3}$/;
  let newPlate = (document.getElementById("plate") as HTMLFormElement).value;

  if (!(regexPlate.test(newPlate))) {
    document.getElementById('plate')?.classList.remove('is-valid');
    document.getElementById('plate')?.classList.add('is-invalid');
    carPlate = false;
  } else if (regexPlate.test(newPlate)) {
    document.getElementById('plate')?.classList.add('is-valid');
    document.getElementById('plate')?.classList.remove('is-invalid');
    carPlate = true;
  }
}
//Validate color
function validateColor() {
  let newColor = (document.getElementById("color") as HTMLFormElement).value;
  if (newColor === "") {
    document.getElementById('color')?.classList.remove('is-valid');
    document.getElementById('color')?.classList.add('is-invalid');
    carColor = false;
  } else {
    document.getElementById('color')?.classList.remove('is-invalid');
    document.getElementById('color')?.classList.add('is-valid');
    carColor = true;
  }
}
//Validate brand
function validateBrand(): void {
  let newBrand = (document.getElementById("brand") as HTMLFormElement).value;
  if (newBrand === "") {
    document.getElementById('brand')?.classList.remove('is-valid');
    document.getElementById('brand')?.classList.add('is-invalid');
    carBrand = false;
  } else {
    document.getElementById('brand')?.classList.add('is-valid');
    document.getElementById('brand')?.classList.remove('is-invalid');
    carBrand = true;
  }
}
//Validate wheels
function validateWheel(e: any): void {
  switch (e.target.name) {
    case "diameter":
      validateDiameter(e.target.value, e.target.id);
      break
    case "brand":
      validateEmpty(e.target.value, e.target.id);
      break
  }

}
function validateDiameter(input: number, id: string) {
  if (input < 0.4 || input > 2 || input == undefined) {
    document.getElementById(id)?.classList.add('is-invalid');
    document.getElementById(id)?.classList.remove('is-valid');
    diameterTrue = false;
  } else {
    document.getElementById(id)?.classList.add('is-valid');
    document.getElementById(id)?.classList.remove('is-invalid');
   diameterTrue = true;
  }
  
}
function validateEmpty(input: string, id: string) {
  if (input === "") {
    document.getElementById(id)?.classList.add('is-invalid');
    document.getElementById(id)?.classList.remove('is-valid');
    brandTrue = false;
  } else {
    document.getElementById(id)?.classList.add('is-valid');
    document.getElementById(id)?.classList.remove('is-invalid');
    brandTrue = true;
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
  //let inputs = document.getElementById('wheels-form') as HTMLElement;
  let boleano: boolean = true;
    
  
  for(let i = 1; i <= 4; i++){
    let diameterValue = (document.getElementById('diameter'+i) as HTMLFormElement)?.value;
    let brandValue = (document.getElementById('brand'+i) as HTMLFormElement)?.value;
    if(brandValue === "" || diameterValue === ""){
      boleano = false;
      diameterTrue = false;
      brandTrue = false;
      
    }
  }
  if(boleano){
    //esta lleno
   createCar();
 }else if(!boleano){
   //esta vacio
   hideWheel();
 }
  
  
});
//Another car
//newCar button
buttonNewCar.addEventListener('click', (e) => {
  e.preventDefault();
  //hide button
  document.getElementById('addCar')?.classList.remove('show');
  //call form
  addNewCar();
  
});

//validate inputs car
(document.getElementById("plate") as HTMLFormElement).addEventListener('keyup', validatePlate);
(document.getElementById("plate") as HTMLFormElement).addEventListener('blur', validatePlate);
(document.getElementById("color") as HTMLFormElement).addEventListener('keyup', validateColor);
(document.getElementById("color") as HTMLFormElement).addEventListener('blur', validateColor);
(document.getElementById("brand") as HTMLFormElement).addEventListener('keyup', validateBrand);
(document.getElementById("brand") as HTMLFormElement).addEventListener('blur', validateBrand);

//validate inputs wheels
//listeners diameter
//listeners brand

for(let z = 1; z <= 4; z++){
(document.getElementById("brand"+z) as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("brand"+z) as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter"+z) as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("diameter"+z) as HTMLFormElement).addEventListener('keyup', validateWheel);

}


*/
