(function() {
    let $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);
    
        let answer = 0;
        let currentValue = 0;
        let sign = false;

    let inputs = $$("button.btn-color");
    for (let i = 0; i < inputs.length; i++) {
        console.log('inputs[i] ', inputs[i]);
        inputs[i].addEventListener('click', function() {
            console.log('inputs[i] 2 ', inputs[i].textContent);
            if ($('.dsptext').textContent <= 0 || sign) {
                $('.dsptext').textContent = inputs[i].textContent;
                sign = false;
            }
            else {
                $('.dsptext').textContent += inputs[i].textContent;
            }
        });
    }
    $('#add').addEventListener('click', (event) => {
        event.preventDefault();
        
        currentValue = $('.dsptext').textContent;
        // answer = currentValue + answer;
        console.log('answer ', answer, 'currentValue ', currentValue);
        answer = parseInt(currentValue) + parseInt(answer);
        $('.dsptext').textContent = answer;
        sign = true;
    })
})();