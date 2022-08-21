let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log("Buton text is ", buttonText);
        if (buttonText === 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }

        else if (buttonText === 'DEL'){
            screen.value = screen.value.toString().slice(0, -1);
            screenValue = screen.value;
        }

        else if (buttonText == "sin") {
            var x = eval(screen.value); 
            x = x * Math.PI / 180;
            screen.value = Math.sin(x);
            screenValue = screen.value
          }

          else if (buttonText == "cos") {
            var y = eval(screen.value); 
            y = y * Math.PI / 180;
            screen.value = Math.cos(y);
            screenValue = screen.value
          }

          else if (buttonText == "tan") {
            var z = eval(screen.value); 
            z = z * Math.PI / 180;
            screen.value = Math.tan(z);
            screenValue = screen.value;
          }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
}