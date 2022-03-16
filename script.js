
let theinput



async function dispatchletter(letter){

theinput.value += letter

theinput.dispatchEvent(new KeyboardEvent('keydown', {'key': letter}))

await sleep()

}



function findgwt(){
const all = document.querySelectorAll('*')


 for (let i = 0; i < all.length; i++) {

 if (all[i].id.includes('gwt')){
 console.log(all[i].id)
 return all[i].id
 }

 }

 }





async function start(){

 let gwt = findgwt()

 if (!gwt){
 console.log('fail')
 return
 }

 let text = document.querySelector(`#${gwt} > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div`)

 theinput = document.querySelector(`#${gwt} > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input`)

 if (!text){
 console.log('text not found')
 return
 }


 if (!theinput){
 console.log('input not found')
 return
 }

 if (theinput.disabled){
  console.log('race didnt start yet')
  return
 }


 let textarray = text.textContent.toString().split('')

 for (let i = 0; i < textarray.length; i++) {

 await dispatchletter(textarray[i])

 }


}




async function sleep(){
return new Promise(r => setTimeout(r, 120));
}


start()
