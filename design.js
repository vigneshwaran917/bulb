var bulb=0;
function bright()
{
    if(bulb==0)
    {
        document.getElementById("image").src="bulb.off1.jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="bulb on1.jpg";
        bulb=0;
    }
}