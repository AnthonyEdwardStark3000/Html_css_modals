var modl=document.getElementById('modal');
var modlbtn=document.getElementById('modalbutton');
var submission=document.getElementById('submit');
var closebutton=document.getElementsByClassName('closebtn')[0];

modlbtn.addEventListener('click',openmodal);
closebutton.addEventListener('click',closemodal);
submission.addEventListener('click',closemodal);
window.addEventListener('click',windowclick);

function openmodal()
{
    modl.style.display='block';
}


function closemodal()
{
    modl.style.display='none';
}

function windowclick(e)
{
    if(e.target == modl){
    modl.style.display='none';}
}