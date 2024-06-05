var currentvalue=1;
document.getElementById('qua').innerHTML=currentvalue;

function decrement(){
    if(currentvalue > 1)
        {
            (currentvalue=currentvalue - 1);
        document.getElementById('qua').innerHTML=currentvalue;
        }
}