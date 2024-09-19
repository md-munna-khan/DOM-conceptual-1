document.getElementById("submit-btn").addEventListener("click",function(){
    const value = document.getElementById("text-area").value;
    
    const container = document.getElementById("review");
    const p = document.createElement("p")
    p.innerText = value;
    container.appendChild(p)
    document.getElementById("text-area").value = '';
})