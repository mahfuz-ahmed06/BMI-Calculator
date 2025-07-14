const submit = document.getElementById('submit')

submit.addEventListener('click', function(e){

    e.preventDefault

    let heightInFeet = parseInt(document.getElementById('heightInFeet').value)
    let heightInInch = parseInt(document.getElementById('heightInInch').value)
    let weight = parseInt(document.getElementById('weightInKg').value)


    let overallHeight = ( ((heightInFeet * 12) + heightInInch) * 0.0254 )

    let bmiCount = weight / (overallHeight * overallHeight)

    // console.log(bmiCount);

    let bmiValue = document.getElementById('bmiValue')

    bmiValue.innerHTML = `Your BMI is: ` + bmiCount.toFixed(2) 


    if (bmiCount < 18.5 && bmiCount > 0){
    
        let bmi = document.getElementById('bmiResult')
    
        bmi.innerHTML = 'You are underweight'

    } else if(bmiCount > 18.4 && bmiCount < 25){
        
        let bmi = document.getElementById('bmiResult')
    
        bmi.innerHTML = 'You are normal'
    } else if (bmiCount > 24.9 && bmiCount < 30){

        let bmi = document.getElementById('bmiResult')
        let advice = document.getElementById('advice')
    
        bmi.innerHTML = 'You are overweight'

        advice.innerHTML = `When combined with healthy eating, regular physical activity will help you lose weight and stay at a healthy weight.`
    } else{

        let bmi = document.getElementById('bmiResult')
    
        bmi.innerHTML = 'You are obes'

        advice.innerHTML = `Losing weight will give you more energy and help to reduce the risk of obesity, heart disease and type 2 diabetes.`
    }
})




















// let ans = prompt('Are you Male or Female?')

// const submit = document.getElementById('submit')

// submit.addEventListener('click', function(e){

//     e.preventDefault

//     let heightInFeet = parseInt(document.getElementById('heightInFeet').value)
//     let heightInInch = parseInt(document.getElementById('heightInInch').value)
//     let weight = parseInt(document.getElementById('weightInKg').value)


//     let overallHeight = ((heightInFeet * 12) + heightInInch) * 0.0254

//     let bmiCount = weight / (overallHeight * overallHeight)

//     // console.log(bmiCount);

//     let bmiValue = document.getElementById('bmiValue')

//     bmiValue.innerHTML = `Your BMI is: ` + bmiCount.toFixed(2) 
// })



// if (ans === `male` && ans === `Male`){

//         if (bmiCount < 18.5 && bmiCount > 0){
    
//             let bmi = document.getElementById('bmiResult')
        
//             bmi.innerHTML = 'You are underweight'
    
//         } else if(bmiCount > 18.4 && bmiCount < 25){
            
//             let bmi = document.getElementById('bmiResult')
        
//             bmi.innerHTML = 'You are normal'
//         } else if (bmiCount > 24.9 && bmiCount < 30){

//             let bmi = document.getElementById('bmiResult')
        
//             bmi.innerHTML = 'You are overweight'
//         } else{

//             let bmi = document.getElementById('bmiResult')
        
//             bmi.innerHTML = 'Error!'
//         }

// } else if(ans == `female` && ans == `Female`){

//     if (bmiCount < 18.5 && bmiCount > 0){
    
//         let bmi = document.getElementById('bmiResult')
    
//         bmi.innerHTML = 'You are underweight'

//     } else if(bmiCount > 18.4 && bmiCount < 25){
        
//         let bmi = document.getElementById('bmiResult')
    
//         bmi.innerHTML = 'You are normal'
//     } else if (bmiCount > 24.9 && bmiCount < 30){

//         let bmi = document.getElementById('bmiResult')
    
//         bmi.innerHTML = 'You are overweight'
//     } else{

//         let bmi = document.getElementById('bmiResult')
    
//         bmi.innerHTML = 'Error!'
//     }
// } else{

//     let bmi = document.getElementById('bmiResult')
    
//         bmi.innerHTML = 'Error!'
// }



