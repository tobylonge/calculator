(function() {
    let $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);
    
        const calculator = $('.calc');
        const keys = calculator.querySelector('.keys');
        const display = $('.display');

        keys.addEventListener('click', (event) => {

            //check if button clicked is a button
            if(event.target.matches('button')) {
                const key = event.target;
                const action = key.dataset.action;
                //Get Key Content
                const keyContent = key.textContent;
                //Get Display Content
                const displayledNum = display.textContent;
                const previousKeyType = calculator.dataset.previousKeyType;

                //Remove .is-depressed class from all keys
                Array.from(key.parentNode.children).forEach(k => {
                    k.classList.remove('is-depressed');
                })

                //Get pressed Numbers
               if(!action) {
                   console.log('key pressed ', key);

                   // If key pressed = 0
                   if (displayledNum == 0 || previousKeyType == 'operator') {
                        console.log('I got here1:::');
                        display.textContent = keyContent;
                   }
                   else {
                        console.log('I got here2:::');
                        display.textContent += keyContent;
                   }
                   calculator.dataset.previousKeyType = 'number';
               }
               // Get action buttons (E.g, Plus, minus, etc)

               // If decimal point is pressed append .
               else if (action === 'decimal') {
                    display.textContent += '.';
                    calculator.dataset.previousKeyType = 'decimal'
               }

               else if (action === 'add' || action === 'subtract' || action === 'divide' || action === 'multiply') {
                   console.log('key ', key);
                   key.classList.add('is-depressed');
                   // Add custom attribute
                   calculator.dataset.operator = action;
                   calculator.dataset.firstValue = displayledNum;
                   calculator.dataset.previousKeyType = 'operator';
               }
               else if (action === 'calculate') {
                   const firstValue = calculator.dataset.firstValue;
                   const operator = calculator.dataset.operator;
                   const secondValue = displayledNum;
                   console.log('operator ', operator);

                   display.textContent = calculate(firstValue, operator, secondValue);
               }
            }
        })

        const calculate = (n1, operator, n2) => {
            console.log('calculate function ', n1, operator, n2);
            let result = '';

            if (operator == 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            }

            else if (operator == 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } 
            else if (operator == 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } 
            else if (operator == 'divide') {
                result = parseFloat(n1) / parseFloat(n2)
            }

            return result;
            
        }
})();

