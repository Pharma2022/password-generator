import  {uppercaseArr,lowercaseArr,numbersArr,symbolsArr,upperChkBox,symbolsChkBox,numbersChkBox,generateBtn,pass1,pass2,passLength,passLengthText} from './consts'


document.addEventListener('click',async(e)=>{
    e.target.id ==='generate' &&generatePasswords()
    e.target.id ==='pass-one' && copyToClipboard(pass1)
    e.target.id ==='pass-two' && copyToClipboard(pass2)
})

passLength.addEventListener('change',()=>{
    passLengthText.textContent=passLength.value
})
const clearPasswords=()=>{
    pass1.textContent=""
    pass2.textContent=""
}

const getRandomNumberFromArr=(arr)=>Math.floor(Math.random()*arr.length)

const setPassword=(id,arr)=>{
    id.textContent+=arr[getRandomNumberFromArr(arr)]
}


const generatePasswords=()=>{
    

    const otherCharsArr=[
        ...(numbersChkBox.checked ? numbersArr:[]),
        ...(symbolsChkBox.checked ? symbolsArr:[]),
        ...(upperChkBox.checked ? uppercaseArr:[]) ]

    const arr=[...lowercaseArr,...otherCharsArr]
        clearPasswords()
        for (let i = 0; i<passLength.value; i++){
            setPassword(pass1,arr)
            setPassword(pass2,arr)
        }


}

const copyToClipboard=async(id)=> {
    const password=id.innerText
    await navigator.clipboard.writeText(password)
    id.innerText="Copied to Clipboard!"
    setTimeout(() => {
        id.innerText=password
    }, 1000);
    

}


generatePasswords()

