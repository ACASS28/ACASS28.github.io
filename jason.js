async function load() {
    fetch("./dogs.json")
        .then((response) => response.json())
        .then(res => res.json())
        .then((data) => console.log(data));
   
    // alert(mydata[0].name);
    // alert(mydata[0].age);
    document.getElementById("dog").textContent = data[0].name;
}

load()