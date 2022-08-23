window.addEventListener('load', function () {
    let btn = document.getElementById("showText");
    btn.addEventListener("click", showOrHideText);

    function showOrHideText() {
        let paragraphs = document.getElementsByTagName("p");
        let myP = paragraphs[0];

        // So menuvanje na klasi
        if (myP.classList.contains("hide")) {
            myP.classList.remove("hide");
            myP.classList.add("show");

        } else {
            myP.classList.remove("show");
            myP.classList.add("hide");
        }

        // // So menuvanje na css
        // if (myP.style.display == "none") {
        //     myP.style.display = "block";
        // } else {
        //     myP.style.display = "none";
        // }
    }
}, false);


