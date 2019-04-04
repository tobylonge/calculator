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

                //Remove .is-depressed class from all keys
                Array.from(key.parentNode.children).forEach(k => {
                    k.classList.remove('is-depressed');
                })

                //Get pressed Numbers
               if(!action) {
                   console.log('key pressed ', key);

                   // If key pressed = 0
                   if (displayledNum == 0) {
                        display.textContent = keyContent;
                   }
                   else {
                       display.textContent += keyContent;
                   }
               }
               // Get action buttons (E.g, Plus, minus, etc)

               // If decimal point is pressed append .
               else if (action === 'decimal') {
                    display.textContent += '.';
               }

               else if (action === 'add' || action === 'subtract' || action === 'divide' || action === 'multiply') {
                   console.log('key ', key);
                   key.classList.add('is-depressed');
               }
               
            }
        })
})();

