const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollX < 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('fa-solid');
    navlist.classList.toggle('open');
}
window.onscroll =  ()=>{
    menu.classList.remove('fa-solid');
    navlist.classList.remove('open');
}
let d = document.getElementById("#useremail").value
console.log(d)
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "taviya2003@gmail.com",
        Password : "025FD410953CF014CFA4548DB2768BBB1A22",
        To : 'taviya2003@gmail.com',
        From : "taviyalalji27@gmail.com",
        // From: document.getElementById("#useremail").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ).catch(
        console.log("error")
    );
}