// document.getElementById('dateButton').addEventListener('click', function handleClick() {
//     document.getElementById('dateTarget').innerHTML = Date();
// });

setInterval("clock()",1000);

function clock(){
dat=new Date()
var clck=document.getElementById("clk").value=dat.getHours()+":"+dat.getMinutes()
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