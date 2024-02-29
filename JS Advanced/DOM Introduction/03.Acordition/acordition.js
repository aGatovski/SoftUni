function toggle() {

    const buttonRef =  document.getElementsByClassName("button")[0];
    const divRef = document.getElementById("extra");
 
    if(divRef.style.display === 'none'){
     buttonRef.textContent = "Less";
     divRef.style.display = 'block';
    }
 
    else {
     buttonRef.textContent = "More";
     divRef.style.display= 'none';
    }
 
 }