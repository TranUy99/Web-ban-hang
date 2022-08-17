const top = document.querySelectorAll(".top")
window.addEventListener("scroll", function() {
    const X = this.pageXOffset;
    if (X > 1) { this.top.classList.add("active") } else {
        this.top.classList.remove("active")
    }
})

const itemsSlidebar = document.querySelectorAll()