let string=" ";
let buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(b)=>{
         let click=b.target.innerHTML
         if(click=="="){
            string=eval(string);
            document.querySelector('input').value=string;
         }
         else if(click=="C"){
            string=" "
            document.querySelector('input').value=string;
         }
         else{
            string=string+click;
            document.querySelector('input').value=string;
         }
    })
})