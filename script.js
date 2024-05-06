const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML= 'Please give a valid height';
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid weight';
    }
    else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        let range;
        let colorLabel;
        if(bmi<18.6){
            range = "underweight";
            colorLabel= "orange";
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            range = "normal"
            colorLabel= "green"
        }
        else{
            range = "overweight";
            colorLabel= "red"
        }
        results.innerHTML =`<span>${bmi}</span>
        <span><p id="range"><b><i>Your weight is in the ${range} range</i></b></p></span>`;
        p=document.querySelector('#range');
        p.style.color=`${colorLabel}`;
    }

});
