var temp1, temp2, sign1, c=0, m=0;
function show (num){
    if (document.calc.textview.value==0 || c!=0) 
    {
        document.calc.textview.value="";
        document.calc.textview.value+=num;
        c=0;
    }
    else
    {
        document.calc.textview.value+=num;  
    }         
}
function clr()
{
    document.calc.textview.value=0;
    sign1="";
}
function opt (sign)
{
    temp1= parseFloat(document.calc.textview.value);
    sign1=(sign);
    c++;
}
function cal()
{
    temp2 = parseFloat(document.calc.textview.value);
    if(sign1 =='+')
    {
        document.calc.textview.value = (temp1+temp2);
    }
    else if(sign1 =='-')
    {
        document.calc.textview.value = (temp1-temp2);
    }
    else if(sign1 =='*')
    {
        document.calc.textview.value = (temp1*temp2);
    }
    else if (sign1== '/')
    {
        document.calc.textview.value = temp1/temp2;
        if(temp2==0)
        {
            alert("You know, anything divides by zero returns infinity. So, never try this again, please.");
        }
    }
}
function mplus()
{
    m+=parseFloat(document.calc.textview.value);
}
function mminus()
{
    m-=parseFloat(document.calc.textview.value);
}
function mem()
{
    document.calc.textview.value= "M:  "+ m;
}
function root ()
{
    document.calc.textview.value= Math.sqrt(document.calc.textview.value);
}
function backs()
{
    var str = document.calc.textview.value;
    if(str.length>1)
    {
        document.calc.textview.value = str.substring(0,str.length-1);
    }
    else
    {
        document.calc.textview.value=0;
    }
}
window.addEventListener("keydown", keyp);
function keyp(k)
{
    if (k.keyCode == "48" || k.keyCode == "45")
    {
        show(0);
    }
    if (k.keyCode == "49" || k.keyCode == "35")
    {
        show(1);
    }
    if (k.keyCode == "50"  || k.keyCode == "40")
    {
        show(2);
    }
    if (k.keyCode == "51" || k.keyCode == "34")
    {
        show(3);
    }
    if (k.keyCode == "52" || k.keyCode == "37")
    {
        show(4);
    }
    if (k.keyCode == "53" || k.keyCode == "12")
    {
        show(5);
    }
    if (k.keyCode == "54" || k.keyCode == "39")
    {
        show(6);
    }
    if (k.keyCode == "55" || k.keyCode == "36")
    {
        show(7);
    }
    if (k.keyCode == "56" || k.keyCode == "38")
    {
        show(8);
    }
    if (k.keyCode == "57" || k.keyCode == "33")
    {
        show(9);
    }
    if (k.keyCode == "107")
    {
        opt('+');
    }
    if (k.keyCode == "109")
    {
        opt('-');
    }
    if (k.keyCode == "106")
    {
        opt('*');
    }
    if (k.keyCode == "111"|| k.keyCode == "191")
    {
        opt('/');
    }
    if (k.keyCode == "13")
    {
        cal();
    }
    if (k.keyCode == "190" ||k.keyCode== "46")
    {
        show('.');
    }
    if (k.keyCode == "8")
    {
        backs();
    }
    if (k.keyCode == "27")
    {
        clr();
    }
}