const div = document.getElementById("container");
const button = document.getElementById("btn");

async function display() {
  try {
    const serverData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await serverData.json();
    console.log(jsonData[0].title)

    console.log(jsonData);
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", display);
z