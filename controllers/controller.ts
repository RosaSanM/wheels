//VARIABLES
//Global
let car:Car;
let wheels:Wheel[] = new Array();
const cars = new Array(); 
//Car elements   
let newPlate = (document.getElementById("plate") as HTMLFormElement).value;
let newBrand;
let newColor;
//Wheels elements
let diameter1;
let brand1;
let diameter2;
let brand2;
let diameter3;
let brand3;
let diameter4;
let brand4;
//buttons
let buttonCar   = (document.getElementById('car') as HTMLElement); 
let buttonWheel = (document.getElementById('rueda') as HTMLFontElement);
let inputs = (document.querySelectorAll("form-control"));

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
function vanish(){
  document.querySelector('.create-car')?.classList.add('hidden');
}

//Create car
function createCar(){
  //get value of inputs
    newPlate  = (document.getElementById("plate") as HTMLFormElement).value;
    newBrand  = (document.getElementById("brand") as HTMLFormElement).value;
    newColor  = (document.getElementById("color") as HTMLFormElement).value;
  //second validate
    if(typeof(newPlate) === 'string' && typeof(newBrand) === 'string' && typeof(newColor) === 'string'){
  //create object and add to array
      car = new Car(newPlate,newColor, newBrand);
      createWheel();
      cars.push(car)
    }
}
//Create wheel
function createWheel(){
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
    let wheel1:Wheel = new Wheel(diameter1, brand1);
    car.addWheel(wheel1);
  
    let wheel2:Wheel = new Wheel(diameter2, brand2);
    car.addWheel(wheel2);
  
    let wheel3:Wheel = new Wheel(diameter3, brand3);
    car.addWheel(wheel3)
    
    let wheel4:Wheel = new Wheel(diameter4, brand4);
    car.addWheel(wheel4);
}
 

//LISTENERS
//validate first form
inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});
function validateForm(){
  inputs.forEach((input)=>{
    if (input.checkValidity() === false) {
      input.classList.add('is-invalid')
    }
  });
}

buttonCar.addEventListener('click', (e)=>{
  e.preventDefault();
  validatePlate();
  //llamar a validacion!!
} );
//create object
buttonWheel.addEventListener('click', (e)=>{
  e.preventDefault();
  createCar();
});


  




