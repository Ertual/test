document.getElementById("non").addEventListener("click",function() {
    document.getElementById("invitation").style.display="none";
    document.getElementById("animationNon").style.display ="block";
    document.getElementById("oui").addEventListener("click", function() {
        window.location.href="rejoindre.html";
    });
 }
