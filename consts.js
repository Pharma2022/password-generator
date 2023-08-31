const uppercaseArr= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const lowercaseArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbersArr= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolsArr=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


const upperChkBox= document.getElementById('uppercase')
const symbolsChkBox=document.getElementById('symbols')
const numbersChkBox= document.getElementById('numbers')
const generateBtn=document.getElementById('generate')
const pass1=document.getElementById('pass-one')
const pass2=document.getElementById('pass-two')
const passLength=document.getElementById('pass-length')
const passLengthText=document.getElementById('pass-length-text')
export {uppercaseArr,lowercaseArr,numbersArr,symbolsArr,upperChkBox,symbolsChkBox,numbersChkBox,generateBtn,pass1,pass2,passLength,passLengthText}