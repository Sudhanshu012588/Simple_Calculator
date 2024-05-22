let dis = document.getElementById("dis");
let visible = document.createElement("h1");
dis.appendChild(visible); // Append the h1 element once

let buttons = document.getElementsByTagName("button");
let opeartions=[];
// Loop through all the buttons and add an event listener to each one
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let buttonValue = buttons[i].textContent; // Get the button's text content
        visible.textContent += buttonValue; // Append the button value to the h1 content
        if(buttons[i].textContent=="\n                    1\n                "){
            opeartions.push(1);
        }
        if(buttons[i].textContent=="\n                    2\n                "){
            opeartions.push(2);
        }
        if(buttons[i].textContent=="\n                    3\n                "){
            opeartions.push(3);
        }
        if(buttons[i].textContent=="\n                    4\n                "){
            opeartions.push(4);
        }
        if(buttons[i].textContent=="\n                    5\n                "){
            opeartions.push(5);
        }
        if(buttons[i].textContent=="\n                    6\n                "){
            opeartions.push(6);
        }
        if(buttons[i].textContent=="\n                    7\n                "){
            opeartions.push(7);
        }
        if(buttons[i].textContent=="\n                    8\n                "){
            opeartions.push(8);
        }
        if(buttons[i].textContent=="\n                    9\n                "){
            opeartions.push(9);
        }
        if(buttons[i].textContent=="\n                    0\n                "){
            opeartions.push(0);
        }
        if(buttons[i].textContent=="\n                    +\n                "){
            opeartions.push("+");
        }
        if(buttons[i].textContent=="\n                    -\n                "){
            opeartions.push("-");
        }
        if(buttons[i].textContent=="\n                    *\n                "){
            opeartions.push("*");
        }
        if(buttons[i].textContent=="\n                    /\n                "){
            opeartions.push("/");
        }
        if(buttons[i].textContent=="\n                    =\n                "){
            let exp = opeartions.join('');
            let result = eval(exp);
            let answer = result; // Get the button's text content
            visible.textContent += answer;
        }
        if(buttons[i].textContent=="\n                    Clear\n                "){
            opeartions = [];  
            visible.textContent="";
        }
        
    });
}