    //Create "mouseEvent" variable and set it as “Empty”.
var mouseEvent = "";


    //Create two variables "last_position_of_x" and  "last_position_of_y".

var  last_position_of_x, last_position_of_y;
 

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables and width_of_line and assign values.
    var color = "yellow";
     var width_of_line = 4;

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e){

        mouseEvent = "MouseDown";
        last_position_of_x = e.clientX - canvas.offsetLeft;
        last_position_of_y = e.clientY - canvas.offsetTop;


    }
            

    //Create the addEventListener() function for mouseup(). 
 
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){
        mouseEvent = "MouseUp";
    }


    

    //Create the addEventListener() function for mouseleave(). 

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e){
        mouseEvent = "MouseLeave";
    }



    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "MouseDown"){
             ctx.beginPath();
             ctx.strokeStyle = color;
             ctx.lineWidth = width_of_line;
            ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,45,0,2 * Math.PI);
             ctx.stroke();

             last_position_of_x = current_position_of_mouse_x; 
             last_position_of_y = current_position_of_mouse_y;

        }
        
      
     
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
