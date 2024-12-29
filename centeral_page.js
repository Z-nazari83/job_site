const sidebar = document.querySelector('.side_bar_items');
const toggleButton = document.querySelector('#toggleSidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
   
});

var isMoved = false;
document.getElementById('toggleSidebar').addEventListener('click', function() {
    
    var item = document.getElementById('toggleSidebar');
    if(!isMoved){
        item.style.right = '80px'; 
        item.style.backgroundColor ='rgba(0, 255, 255, 0)';
        item.style.border='1px solid rgba(168, 168, 168, 0.25)'
        isMoved = true;
    }
    else{
        item.style.right='0';
        item.style.backgroundColor ='rgba(0, 255, 255, 0.319)';
        isMoved = false;
    }
});


document.querySelectorAll('.icon-container').forEach(icon => {
    icon.addEventListener('click', () => {
      
        document.querySelectorAll('.icon-container').forEach(item => {
            item.classList.remove('active');
        });

        icon.classList.add('active');

        const link = icon.querySelector('.hidden-text');
        link.href = icon.getAttribute('data-link');
    });
});


document.addEventListener("DOMContentLoaded",()=>{
    const iframe = document.getElementById("frame_item");
    const defaultPage = "../html/home.html";
    var i = document.getElementById("frame_item");

    iframe.src = defaultPage;
    const buttons = document.querySelectorAll("#bar #btn");
    buttons.forEach(button =>{
        button.addEventListener("click",()=>{
            const url=button.getAttribute("data-url");
            if(url=="../html/home.html"){
                iframe.style.width = "1350px";
                iframe.style.left = "0px"

                iframe.src=url;    
            }
            else{
                iframe.style.width = "1150px";
                iframe.style.left = "200px";
                iframe.src=url;
            }
        })
        
    })
})