document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".button");

    if(button){
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.08)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    }

    document.querySelectorAll(".post").forEach(post => {

        post.addEventListener("mouseover", () => {
            post.style.transform = "translateY(-8px)";
            post.style.transition = ".3s";
        });

        post.addEventListener("mouseleave", () => {
            post.style.transform = "translateY(0)";
        });

    });

});
