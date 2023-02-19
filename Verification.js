const inputs=document.querySelectorAll("input");
const button=document.querySelector("button");

inputs.forEach((input,index1)=>{
    input.addEventListener("keyup",(e)=>{
        const currentInput=input,
        next=input.nextElementSibling,
        preve=input.previousElementSibling;

        if(currentInput.value.length >1){
            currentInput.value="";
            return;
        }
        if(next && next.hasAttribute("disabled")&& currentInput.value!==""){
            next.removeAttribute("disabled")
            next.focus()
        }
        if(e.key==="Backspace"){
            inputs.forEach((input,index2)=>{
                if(index1<=index2 && preve){
                    input.setAttribute("disabled",true);
                    currentInput.value="";
                    preve.focus()
                }
            })
        }
        if(!inputs[0].disabled){
            button.classList.add("active");
        }
    })
})


window.addEventListener("load",()=>inputs[0].focus())