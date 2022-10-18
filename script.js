let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let h = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'del') {
            screen.value = screen.value.slice(0, -1);
            screenValue = screen.value;
        }
        else if (buttonText == 'sqrt') {
            screenValue = Math.sqrt(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            h = screen.value + '=' + eval(screenValue);
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'hty') {
            screen.value = h;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}