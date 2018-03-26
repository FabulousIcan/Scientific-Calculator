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
            }
            else if (clicked_btn == '1/x') {
                // reciprocal
                outputField.innerHTML = 1/outputField.innerHTML;
            } else if (clicked_btn == '√') {
                // squareroot
                outputField.innerHTML = Math.sqrt(outputField.innerHTML);  
            } else if (clicked_btn == 'x^2') {
                // square
                outputField.innerHTML *= outputField.innerHTML;  
            }else if (clicked_btn == 'x^3') {
                // square
                outputField.innerHTML *= outputField.innerHTML * outputField.innerHTML;  
            } else if (clicked_btn == 'Rnd') {
                // exponential
                outputField.innerHTML = Math.round(outputField.innerHTML);
            } else if (clicked_btn == 'Rnd') {
                // pi
                outputField.innerHTML = Math.PI(outputField.innerHTML);
            } else if (clicked_btn == 'asin') {
                // arcsine
                outputField.innerHTML = Math.asin(outputField.innerHTML);
            }
            else if (clicked_btn == 'acos') {
                // arccosine
                outputField.innerHTML = Math.acos(outputField.innerHTML);
            }
            else if (clicked_btn == 'atan') {
                // arctan
                outputField.innerHTML = Math.atan(outputField.innerHTML);
            }
            else if (clicked_btn == 'ln2') {
                // arccosine
                outputField.innerHTML = Math.LN2;
            }
            else if (clicked_btn == 'E') {
                // base of natural logarithms
                outputField.innerHTML = Math.E;
            }
            else if (clicked_btn == 'sin') {
                // sine
                outputField.innerHTML = Math.sin(outputField.innerHTML);
            }
            else if (clicked_btn == 'cos') {
                // cosine
                outputField.innerHTML = Math.cos(outputField.innerHTML);
            }
            else if (clicked_btn == 'tan') {
                // tan
                outputField.innerHTML = Math.tan(outputField.innerHTML);
            }
      
            else if (clicked_btn == 'log') {
                // logarithm
                outputField.innerHTML = Math.log(outputField.innerHTML);
            }
            else if (clicked_btn == '%') {
                // squareroot
                outputField.innerHTML = outputField.innerHTML / 100;  
            } 
      
            else if (clicked_btn == 'AC' || clicked_btn == 'DEL') {
                // clear screen
                outputField.innerHTML = '0';
            } else if (clicked_btn == 'EXP') {
                // exponential
                outputField.innerHTML = Math.exp(outputField.innerHTML);
            }
            
          else {
            if (outputField.innerHTML == '0') {
                outputField.innerHTML = clicked_btn;
                 
            } else {
                outputField.innerHTML += clicked_btn;
                 
            }
        }
    }