let toggleLinks = document.getElementsByClassName("toggleLink");

for (let i = 0; i < toggleLinks.length; i++) {
    toggleLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        let nextElement = this.nextElementSibling;
        while(nextElement && !nextElement.classList.contains("abstracttxt")) {
            nextElement = nextElement.nextElementSibling;
        }
        if (nextElement) {
            if (nextElement.style.display === "none" || nextElement.style.display === "") {
                nextElement.style.display = "block";
            } else {
                nextElement.style.display = "none";
            }
        }
    });
}