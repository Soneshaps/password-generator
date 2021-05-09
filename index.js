var generatedString
var passwordLength = 17
function generatePassword(){
    var totalLetter = document.getElementById("total-number").value
    var isLowerCase = document.getElementById("lowercase").checked
    var isUpperCase = document.getElementById("uppercase").checked
    var isNumber = document.getElementById("number").checked
    var isSymbol = document.getElementById("symbol").checked
    console.log(isLowerCase)
    
    
    var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers 
    var symbol
    var upperCase = []
    for (let i = 0; i < lowerCase.length; i++) {
        upperCase[i] = lowerCase[i].toUpperCase();
        
    }
    console.log(upperCase)
    var flag = 0
    
    if(isLowerCase){
         lowerCase = lowerCase ;
         flag += 1
    }else{
        lowerCase = [''];
    
    }
    
    if(isUpperCase){
        upperCase = upperCase ;
        flag += 1
    }else{
       upperCase = [''];
    }
    
    if(isNumber){
        numbers = ['0','1','2','3','4','5','6','7','8','9'];
        flag += 1
    }else{
       numbers = [''];
    }
    
    
    if(isSymbol){
        symbol = ['!','@','#','$','%','^','&','*','(',')'];
        flag += 1
    }else{
       symbol = [''];
    }
    var upperCaseG = []
    var lowerCaseG = []
    var symbolG = []
    var numberG = []
    for (let j = 0; j < totalLetter; j++) {
         lowerCaseG[j] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
         upperCaseG[j] = upperCase[Math.floor(Math.random() * upperCase.length)];
         symbolG[j] = symbol[Math.floor(Math.random() * symbol.length)];
         numberG[j] = numbers[Math.floor(Math.random() * numbers.length)];
        
    }
    console.log(lowerCaseG)
    console.log(upperCaseG)
    console.log(symbolG)
    console.log(numberG)
    
    var generatedArray = upperCaseG.concat(lowerCaseG,numberG,symbolG)
    var itemToRemove = ''
    generatedArray = generatedArray.filter(item => item !== itemToRemove)
    console.log(generatedArray)
    
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    
    shuffle(generatedArray);
    var spliceNumber 

    spliceNumber =  totalLetter*(flag-1)
   
    
    var splicedArray = generatedArray.splice(spliceNumber)
    
    
    generatedString = splicedArray.join('')
    console.log(splicedArray)
    showPasswordArea()

    return document.getElementById('password-area').innerHTML = generatedString
}


function copyPassword() {
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = generatedString || ''
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showClipboard()
}

function showPasswordArea(){
    var passwordArea = document.getElementById('password-area-main');
    passwordArea.style.display = 'block'
}

function showClipboard(){
    var clipboard = document.getElementById('display-copied');
    clipboard.style.display = 'inline-block'
    setTimeout(function(){ 
        clipboard.style.display = "none";
    }, 500);
}

function balanceCheckbox() {
    var isLowerCase = document.getElementById("lowercase").checked
    var isUpperCase = document.getElementById("uppercase").checked
    var isNumber = document.getElementById("number").checked
    var isSymbol = document.getElementById("symbol").checked
    if(!isLowerCase && !isUpperCase && !isNumber && !isSymbol){
        document.getElementById("lowercase").checked = true
    }
}
balanceCheckbox()

function inputSliderRangeValue(value){
    if(value>32) value = 32;
    if(value<2) value = 2;
    passwordLength = Math.floor(value);
    document.getElementById('total-number').value = passwordLength
    document.getElementById('total-number-input').value = passwordLength
}



