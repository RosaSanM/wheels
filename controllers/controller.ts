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
    
  //create object and add to array
    car = new Car(newPlate, newColor, newBrand);
    createWheel();
    cars.push(car)
    hideWheel();
    (document.getElementById('car-form') as HTMLFormElement)?.classList.remove('is-valid');
    //show data car
    (document.getElementById('result') as HTMLElement).classList.remove('d-none');  
    (document.getElementById('result') as HTMLElement).innerHTML += `Coche para reparar: <br>    
      Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>`
    for(let i = 0; i<= 4; i++){
      (document.getElementById('result') as HTMLElement).innerHTML += `Coche para reparar: <br>    
            
      Rueda ${i} => Diametro: ${car.wheels[i].diameter}, marca: ${car.wheels[i].brand} <br>`
    }

/*
    (document.getElementById('result') as HTMLElement).innerHTML += `Coche para reparar: <br>    
      Matricula: ${car.plate}, color: ${car.color} y marca: ${car.brand} <br>      
      Rueda 1 => Diametro: ${car.wheels[0].diameter}, marca: ${car.wheels[0].brand} <br>
      Rueda 2 => Diametro: ${car.wheels[1].diameter}, marca: ${car.wheels[1].brand} <br>
      Rueda 3 => Diametro: ${car.wheels[2].diameter}, marca: ${car.wheels[2].brand} <br>
      Rueda 4 => Diametro: ${car.wheels[3].diameter}, marca: ${car.wheels[3].brand} <br><br><br>`
    
  */  
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

} 
function validateDiameter(input: number, id: string) {
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
    document.getElementById(id)?.classList.add('is-invalid');
    document.getElementById(id)?.classList.remove('is-valid');
    wheelTrue = false;
  } else {
    document.getElementById(id)?.classList.add('is-valid');
    document.getElementById(id)?.classList.remove('is-invalid');
    wheelTrue = true;
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
//listeners brand

for(let z = 1; z <= 4; z++){
(document.getElementById("brand"+z) as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("brand"+z) as HTMLFormElement).addEventListener('keyup', validateWheel);
(document.getElementById("diameter"+z) as HTMLFormElement).addEventListener('blur', validateWheel);
(document.getElementById("diameter"+z) as HTMLFormElement).addEventListener('keyup', validateWheel);

}




