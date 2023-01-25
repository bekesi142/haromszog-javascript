function szerkesztheto() {
    var bef1 = document.getElementById("bef1").value;
    var bef2 = document.getElementById("bef2").value;
    var atf = document.getElementById("atf").value;
    if(Math.pow(bef1, 2) + Math.pow(bef2, 2) == Math.pow(atf, 2)) {
        alert("A háromszög MEGSZERKESZTHETŐ");
    }
        
    else {
        alert("A háromszög NEM SZERKESZTHETŐ MEG");
    }
        
}

function atfogoszamito() {
    var bef1 = document.getElementById("bef1").value;
    var bef2 = document.getElementById("bef2").value;
    alert(Math.pow(bef1, 2) + Math.pow(bef2, 2))
}