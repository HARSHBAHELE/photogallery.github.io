let button = document.querySelector("button");
let gallery = document.querySelector(".img-gallery")
let errorMess = document.querySelector("#errorMess");

async function getImages() {
    let input = document.querySelector("input").value;
    if(input > 10 || input < 1) {
        errorMess.innerText = "Number should be between 0 and 11";
        errorMess.style.display = "block";
        return;
    }
    img = "";
try {
    button.style.display = "none";
    gallery.innerHTML = "Loding";
    await fetch(`https://api.unsplash.com/photos?per_page=${input}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
    ).then((response)=> {
        response.json().then((data)=> {
            if(data) {
                data.forEach((pic)=> {
                    img+=` <img src=${pic.urls.small} alt="image"/>`;
                    gallery.style.display = "block";
                    gallery.innerHTML = img;
                    button.style.display = "block";
                    errorMess.style.display ="none"
                });
            }
        })
    });
}  catch(error) {
    console.log(error);
    errorMess.style.display = "block";
    errorMess.innerHTML = "An error happened, try again later";
    button.style.display = "block";
    gallery.style.display = "none";
  }
}

button.addEventListener("click",getImages);




