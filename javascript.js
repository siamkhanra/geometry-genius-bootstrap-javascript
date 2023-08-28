// 

function inputFind(element1, element2){
    const input1Text = document.getElementById(element1);
    const input1String = input1Text.value;
    const input1 = parseFloat(input1String);
    const input2Text = document.getElementById(element2);
    const input2String = input2Text.value;
    const input2 = parseFloat(input2String);
    if(typeof input1 === 'string' || isNaN(input1) || input1 < 0 || typeof input2 === 'string' || isNaN(input2) || input2 < 0){
        alert("Provide correct number");
        clearInput(element1, element2);
        return ;
    }
    return [input1, input2];
}

function resultPrint(result, element){
    const resultDisplay = document.getElementById('result-display');

    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center fw-semibold my-2";
    resultDisplay.appendChild(div);

    const textElement = document.createElement("span");
    textElement.textContent = element;
    div.appendChild(textElement);

    const resultValueElement = document.createElement("span");
    resultValueElement.textContent = `${result} cm²`;
    div.appendChild(resultValueElement);

    const button = document.createElement("button");
    button.textContent = "Convert to m²";
    button.className = "btn btn-info px-3 fs-6 text-white";
    div.appendChild(button);
}

function clearInput(elementId1, elementId2){
    document.getElementById(elementId1).value = "";
    document.getElementById(elementId2).value = "";
}

document.getElementById('triangle-btn').addEventListener('click', function(){
    const input = inputFind('triangle-input1', 'triangle-input2');
    const resultPrimary = 0.5 * input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Triangle");
    clearInput('triangle-input1', 'triangle-input2');
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const input = inputFind('rectangle-input1', 'rectangle-input2');
    const resultPrimary = input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Rectangle");
    clearInput('rectangle-input1', 'rectangle-input2');
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const input = inputFind('parallelogram-input1', 'parallelogram-input2');
    const resultPrimary = input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Parallelogram");
    clearInput('parallelogram-input1', 'parallelogram-input2');
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const input = inputFind('rhombus-input1', 'rhombus-input2');
    const resultPrimary = 0.5 * input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Rhombus");
    clearInput('rhombus-input1', 'rhombus-input2');
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const input = inputFind('pentagon-input1', 'pentagon-input2');
    const resultPrimary = 0.5 * input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Pentagon");
    clearInput('pentagon-input1', 'pentagon-input2');
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const input = inputFind('ellipse-input1', 'ellipse-input2');
    const resultPrimary = 3.14 * input[0] * input[1] ;
    const result = resultPrimary.toFixed(2);
    resultPrint(result, "Ellipse");
    clearInput('ellipse-input1', 'ellipse-input2');
})

document.getElementById('clear-display').addEventListener('click', function(){
    const getResultDisplay = document.getElementById('result-display');
    getResultDisplay.innerHTML = '';
})


// Hover Background Color
const hoverDivs = document.querySelectorAll(".hover-color");

hoverDivs.forEach(function(hoverDiv){
    hoverDiv.addEventListener("mouseover", function() {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
    
        const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        hoverDiv.style.backgroundColor = randomColor;
    });
})