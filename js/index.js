//Display time
setInterval("setTime()",1000);

function setTime(){
  var dateObject = new Date();
  if(dateObject.getHours() < 10){    
   document.getElementById("time_display").value = '0' + dateObject.getHours() + " : " + dateObject.getMinutes();
   }
  if(dateObject.getMinutes() < 10){    
   document.getElementById("time_display").value = dateObject.getHours() + " : " + "0" + dateObject.getMinutes();
   }
else{
  document.getElementById("time_display").value =  dateObject.getHours() + " : " + dateObject.getMinutes();
}
}

//calculations
var outputField = document.getElementById('outputfield');
     
    function clickedBtn(obj) {
         
        var clicked_btn = obj.innerHTML;
         
        if (clicked_btn == '=') {
            // Calculate
            outputField.innerHTML = eval(outputField.innerHTML);
             
        } else if (clicked_btn == '1/x') {
            // reciprocal
            outputField.innerHTML = 1/outputField.innerHTML;
        } else if (clicked_btn == 'AC' || clicked_btn == 'DEL') {
            // clear screen
            outputField.innerHTML = '0';
        } else {
            if (outputField.innerHTML == '0') {
                outputField.innerHTML = clicked_btn;
                 
            } else {
                outputField.innerHTML += clicked_btn;
                 
            }
        }
    }