//VARIABLES
//Global
let car: Car;
let wheels: Wheel[] = new Array();
let show;
const cars = new Array();
//boolean validate   
let carTrue: boolean = false;
let wheelTrue: boolean = false;
//buttons
let buttonCar    = (document.getElementById('car') as HTMLElement);
let buttonWheel  = (document.getElementById('rueda') as HTMLElement);
let buttonNewCar = (document.getElementById('addCar') as HTMLElement);


//FUNCTIONS
//Hidden forms
function hideCar() {
  if(carTrue){
    document.querySelector('.create-car')?.classList.add('hidden');
    document.querySelector('#wheels-form')?.classList.remove('hidden');
    carTrue = false;
  }else if(!carTrue){
    alert("rellena bien los campos");
  }    
}
function hideWheel(){
  if(wheelTrue){
    document.querySelector('#wheels-form')?.classList.add('hidden');
    document.querySelector('#addCar')?.classList.add('show');
    
  }else if(!wheelTrue){
    alert("rellena bien los campos");
  }
}

//Create car
function createCar() {
  //get value of inputs
  let newPlate = (document.getElementById("plate") as HTMLFormElement).value;
  let newBrand = (document.getElementById("brand") as HTMLFormElement).value;
  let newColor = (document.getElementById("color") as HTMLFormElement).value;
  
  // validate
  
  if(wheelTrue){  
    let i;
  //create object and add to array
    car = new Car(newPlate, newColor, newBrand);
    createWheel();
    cars.push(car)
    hideWheel();
    (document.getElementById('car-form') as HTMLFormElement)?.classList.remove('is-valid');
    //show data car
    (document.getElementById('result') as HTMLElement).classList.remove('d-none');  
    (document.getElementById('result') as HTMLElement).innerHTML += `Coche para reparar: <br>    
      Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>      
      Rueda 1 => Diametro: ${car.wheels[0].diameter}, marca: ${car.wheels[0].brand} <br>
      Rueda 2 => Diametro: ${car.wheels[1].diameter}, marca: ${car.wheels[1].brand} <br>
      Rueda 3 => Diametro: ${car.wheels[2].diameter}, marca: ${car.wheels[2].brand} <br>
      Rueda 4 => Diametro: ${car.wheels[3].diameter}, marca: ${car.wheels[3].brand} <br><br><br>`
    
    
  }else{
    hideWheel();
  }
}
//Create wheel
function createWheel() {
  //wheel values
  let diameter1 = (document.getElementById('diameter1') as HTMLFormElement).value;
  let brand1    = (document.getElementById('brand1') as HTMLFormElement).value;
  let diameter2 = (document.getElementById('diameter2') as HTMLFormElement).value;
  let brand2    = (document.getElementById('brand2') as HTMLFormElement).value;
  let diameter3 = (document.getElementById('diameter3') as HTMLFormElement).value;
  let brand3    = (document.getElementById('brand3') as HTMLFormElement).value;
  let diameter4 = (document.getElementById('diameter4') as HTMLFormElement).value;
  let brand4    = (document.getElementById('brand4') as HTMLFormElement).value;
  
  //create object and add
  let wheel1: Wheel = new Wheel(diameter1, brand1);
  car.addWheel(wheel1);

  let wheel2: Wheel = new Wheel(diameter2, brand2);
  car.addWheel(wheel2);

  let wheel3: Wheel = new Wheel(diameter3, brand3);
  car.addWheel(wheel3)

  let wheel4: Wheel = new Wheel(diameter4, brand4);
  car.addWheel(wheel4);

  
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
    carTrue = false;
  } else if (regexPlate.test(newPlate)) {
    document.getElementById('plate')?.classList.add('is-valid');
    document.getElementById('plate')?.classList.remove('is-invalid');
    carTrue = true;
  }
}
//Validate color
function validateColor() {
  let newColor = (document.getElementById("color") as HTMLFormElement).value;
  if (newColor === "") {
    document.getElementById('color')?.classList.remove('is-valid');
    document.getElementById('color')?.classList.add('is-invalid');
    carTrue = false;
  } else {
    document.getElementById('color')?.classList.remove('is-invalid');
    document.getElementById('color')?.classList.add('is-valid');
    carTrue = true;
  }
}
//Validate brand 
function validateBrand(): void {
  let newBrand = (document.getElementById("brand") as HTMLFormElement).value;
  if (newBrand === "") {
    document.getElementById('brand')?.classList.remove('is-valid');
    document.getElementById('brand')?.classList.add('is-invalid');
    carTrue = false;
  } else {
    document.getElementById('brand')?.classList.add('is-valid');
    document.getElementById('brand')?.classList.remove('is-invalid');
    carTrue = true;
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

  function validateDiameter(input: number, id:string) {
    if (input < 0.4 || input > 2 || input == undefined) {
      document.getElementById(id)?.classList.add('is-invalid');
      document.getElementById(id)?.classList.remove('is-valid');
      wheelTrue = false;
    } else {
      document.getElementById(id)?.classList.add('is-valid');
      document.getElementById(id)?.classList.remove('is-invalid');
      wheelTrue = true;
    }
  }

  function validateEmpty(input: string, id: string) {
    if (input === "") {
      document.getElementById(`${id}`)?.classList.add('is-invalid');
      document.getElementById(`${id}`)?.classList.remove('is-valid');
      wheelTrue = false;
    } else {
      document.getElementById(`${id}`)?.classList.add('is-valid');
      document.getElementById(`${id}`)?.classList.remove('is-invalid');
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
(document.getElementById("diameter1") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter1") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("diameter2") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter2") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("diameter3") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter3") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("diameter4") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter4") as HTMLFormElement).addEventListener('blur', validateWheel);
//listeners brand
(document.getElementById("brand1") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("brand1") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("brand2") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("brand2") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("brand3") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("brand3") as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("brand4") as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("brand4") as HTMLFormElement).addEventListener('blur', validateWheel);







