//page-anim.js
//iife version of basic animation and navigation (without History API)
var app = (function(){
    let pages = [];
    let links = [];
    
    document.addEventListener("DOMContentLoaded", function(){
        pages = document.querySelectorAll('[data-page]');
        links = document.querySelectorAll('[data-role="link"]');
        console.log('links', links);
        //pages[0].className = "active";  - already done in the HTML
        [].forEach.call(links, function(link){
            link.addEventListener("click", navigate)
        });
    });
    
    function navigate(ev){
        // alert('hi');
        console.log(ev.currentTarget);
        // window.image_path = "img/image-3.jpg";

        sessionStorage.setItem('image_path', ev.currentTarget.src);
        // Get the element with the ID "my-element"
        // var element = document.getElementById("detail-scene");
        // var element_first = document.getElementById("first-scene");
        // element_first.style.opacity = 0.0;
        // // Do something with the element
        // element.style.background = "yellow";
        // element.style.color = "red";
        // element.style.opacity = 1.0;
        
        

        window.location.href="other.html";

        ev.preventDefault();
        
        let id = ev.currentTarget.href.split("#")[1];
        console.log('id', id);
        alert('hi');
        [].forEach.call(pages, function(page){
           if(page.id ===id){
               page.classList.add('active');
           }else{
               page.classList.remove('active');
           } 
        });
        return false;
    }
    
    return {
        pages,
        links,
        xhr: ajax
    }
})();

//the navigate method is private inside our iife
//the variables pages and links are public and can be accessed as app.pages or app.links