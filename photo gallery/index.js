const btnEl=document.getElementById("btn");
const errorMessageEl=document.getElementById("errorMessage");
const galleryEl=document.getElementById("gallery");
//asynchrone function to run operations in parallel
async function fetchImage() {
    const inputValue=document.getElementById("input").value;
    if(inputValue >10 ||inputValue < 1){
        errorMessageEl.style.display="block";
        errorMessageEl.innerText="Number should between 1 and 10";
        return ;

    }
    //API and spinner
    imgs="";
    btnEl.style.display="none";
    const loading=`<img src="Rolling-1s-13px.svg"/>`;
    galleryEl.innerHTML=loading;
     await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=4WforF85_B1aRIrKQzO5fCGWzj8ZicY4ehyRNxiqD-A`).then(
        (res)=>
        res.json().then((data)=> {
        if(data){
            data.forEach((pic) => {
                imgs+= `<img src=${pic.urls.small} alt="image"/>`;
                galleryEl.style.display="block";
                galleryEl.innerHTML= imgs;
                btnEl.style.display="block";
                errorMessageEl.style.display="none";
             
            }); 
        
        }
    })
);

btnEl.style.display="block";
    
}
btnEl.addEventListener("click",fetchImage);

