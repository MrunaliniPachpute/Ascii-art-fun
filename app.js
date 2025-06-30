function generateAscii(){
    let inpVal = document.querySelector("input").value;

    fetch(`/search?text=${inpVal}`)
        .then(res => res.text())
        .then((data)=>{
            let result = document.querySelector("#result");
            result.innerHTML= data;
        });
}