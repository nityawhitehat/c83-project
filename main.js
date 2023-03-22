var mouseEvent = "" ;
var lastX , lastY , currentX , currentY ; 
color = "black" ; 
width_of_line = "2"; 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop

    if (mouseEvent = "mouseDown") {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastX + " , y = " + lastY);
    ctx.moveTo(lastX, lastY);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + currentX + "y = " + currentY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflown = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clienty - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        

        last_x = current_x; 
        last_y = current_y;
    }
function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}