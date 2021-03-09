//VALIDATES

//FUNCTIONS
//Validate inputs

//Validate plate
/*function validatePlate(){ 
      // Fetch all the forms we want to apply custom validation styles
      var inputs = document.getElementsByClassName('form-control')
      let regexPlate =  /^[a-zA-ZÀ-ÿ\s]{3,40}$/;  //[a-zA-Z]{4}[0-9]{3}$/;
      let plate = (document.getElementById("plate") as HTMLFormElement).value;
      
      // Loop over each input and watch blue event
      var validation = Array.prototype.filter.call(inputs, function(input) {
  
        input.addEventListener('blur', function() {
          // reset
          input.classList.remove('is-invalid')
          input.classList.remove('is-valid')
  
          if (input.checkValidity() === false) {
              input.classList.add('is-invalid')
          }
          else {
            
            
            if(!(regexPlate.test(plate.value))){
              console.log('mal')
              document.getElementById('plate')?.classList.add('is-invalid');
            }else{
              createCar();
              vanish()
            }
            input.classList.add('is-valid')
          }
        }, false);
      });
    
  
  
}
//Validate diameter


//LISTENER*/
