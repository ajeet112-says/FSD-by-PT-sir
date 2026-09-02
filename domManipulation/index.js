const root= document.getElementById('root')
const button=document.getElementById('btn')

const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div')
function getData(){

    try{
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1eHLV2J-SIkvpEbOgd0fYpNoffvjCY-4B_m8LBaafQ&s=10'
    img.setAttribute('height',200)
    img.setAttribute('width',200)
    h2.innerText="ABES Engineering College";
    h2.style.color='red';
    h2.style.backgroundColor='cyan'

    div.style.border='2px solid black'
    div.appendChild(h2)
    div.appendChild(img)
   
    root.appendChild(div)

    }catch(err){
   console.log(err)
    }finally{
    button.remove()
    }
}

button.addEventListener('click',getData)