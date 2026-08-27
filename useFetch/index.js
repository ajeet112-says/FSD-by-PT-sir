// 

const container = document.getElementById('container');
console.log(container)
const button = document.getElementById("btn");
console.log(button)

async function fetchData() {
    try {
        const serverData = await fetch('https://fakestoreapi.com/products')
        const jsonData= await serverData.json();
        // console.log(jsonData[1].title)
        container.innerHTML= `${jsonData[1].title}`;
    } catch (err) {
        console.log("Error is" + err)
    }
}
button.addEventListener('click', fetchData);