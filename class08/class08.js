//function to discover what kind of triangle is:
function triangle() {

    //geting date inserted by users in Interface Field
    const side1 = document.getElementById("firstSide");
    const side2 = document.getElementById("secondSide");
    const side3 = document.getElementById("thirdSide");

    side1.style.border = "none";
    side2.style.border = "none";
    side3.style.border = "none";
   
   //conditional to know if the fields are empty or not.
   if(!side1.value || !side2.value || !side3.value){
      if((!side1.value) && (!side2.value) && (!side3.value)){
          side1.style.border = "2px solid red";
          side2.style.border = "2px solid red";
          side3.style.border = "2px solid red";
      }
      else if((!side1.value) && (!side2.value)){
          side1.style.border = "2px solid red";
          side2.style.border = " 2px solid red";
      }
      else if((!side1.value) && (!side3.value)) {
          side1.style.border = "2px solid red";
          side3.style.border = "2px solid red";
      }
      else {
        side2.style.border = "2px solid red";
        side3.style.border = "2px solid red";
      }
    }
    else {
        const result = document.getElementById("result");   

        //condicional to validate e discover what kind of triangle is
        if(side1.value==side2.value && side2.value==side3.value && side3.value==side1.value){
            result.innerHTML = "Equilatero"
        }
        else if(side1.value!=side2.value && side2.value!=side3.value && side3.value!=side1.value){
            result.innerHTML = "Escaleno";
        }
        else {
            result.innerHTML = "Isósceles";
        } 
    }
    
}