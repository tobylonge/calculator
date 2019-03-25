(function() {
    let $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);
    
        let valueA = undefined;
        let valueB = undefined;
        let valid = false;
        let nextSign = undefined;
        let prevSign = undefined;

    let inputs = $$("button.btn-color");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function() {
            if ($('.dsptext').textContent <= 0 || valid) {
                $('.dsptext').textContent = inputs[i].textContent;
                valid = false;
            }
            else {
                $('.dsptext').textContent += inputs[i].textContent;
            }
        });
    }
    // 
    $('#add').addEventListener('click', (event) => {
        event.preventDefault();
        // debugger;
        operation('+');
    })

    $('#subtract').addEventListener('click', (event) => {
        event.preventDefault();
        // debugger;
        operation('');
    })

    $('#multiply').addEventListener('click', (event) => {
        event.preventDefault();
        // debugger;
        operation('*');
    })

    $('#divide').addEventListener('click', (event) => {
        event.preventDefault();
        // debugger;
        operation('/');
    })

    let operation = sign => {
        if(!valueA) {
            valueA = $('.dsptext').textContent;
            prevSign = sign;
            valid = true;
            return
        }
        else {
            valueB = $('.dsptext').textContent;
            nextSign = sign
            // answer = currentValue + answer;
            console.log(`${valueA} ${prevSign}  ${valueB}`);

            if (prevSign === '+') {
                valueA = parseInt(valueA) + parseInt(valueB);
            }

            if (prevSign === '-') {
                valueA = parseInt(valueA) - parseInt(valueB);
            }

            if (prevSign === '*') {
                valueA = parseInt(valueA) * parseInt(valueB);
            }

            if (prevSign === '/') {
                valueA = parseInt(valueA) / parseInt(valueB);
            }


            $('.dsptext').textContent = valueA;
            prevSign = nextSign;
            valid = true;
        }
    }
})();

