var pass = document.getElementById("password");
var msg = document.getElementById("massage");
var str = document.getElementById("strength");

pass.addEventListener('input',() => 
{
    if (pass.value.length > 0) 
    {
        msg.style.display="block";
    }
    else
    {
        msg.style.display="none";
    }

    if (pass.value.length <4) 
    {
        str.innerHTML ="Weak";
        pass.style.borderColor ="green";
        msg.style.color = "green";
    }
    else if (pass.value.length >=4 && pass.value.length <8) 
    {
        str.innerHTML ="Mediam";
        pass.style.borderColor ="orange";
        msg.style.color = "orange";
    } 
    else 
    {
        str.innerHTML ="Strong";
        pass.style.borderColor ="red";
        msg.style.color = "red";
    }
})
