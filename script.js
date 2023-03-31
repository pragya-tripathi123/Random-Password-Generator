const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()/_"

const passbox = document.getElementById("pass-box")
const range = document.getElementById("total-char")
const upperInput  = document.getElementById("upper-case")
const lowerInput  = document.getElementById("lower-case")
const numberInput  = document.getElementById("number")
const symbol  = document.getElementById("symbol")


const getRandomdata = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") =>{
    if(upperInput.checked){
        password += getRandomdata(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomdata(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomdata(numberSet)
    }
    if(symbol.checked){
        password += getRandomdata(symbolSet)
    }
    if(password.length < range.value){
        return generatePassword(password)
    }
    passbox.innerText = (truncatestring(password,range.value));
}
// generatePassword();
document.getElementById("btn").addEventListener("click", 
    function(){
        generatePassword();
    }
)
generatePassword();

function truncatestring(str,num){
    if(str.length > num){
        let substr = str.substring(0,num)
        return substr
    }
    else{
        return str
    }
}