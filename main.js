var canvas = new fabric.Canvas('myCanvas');var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

 function new_image (get_image) {
    fabric.Image.fromUrl("giphy.gif", function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
            top:0,
            left:0
        });
    canvas.add (block_image_object);
    });

}


function playSound(){
    x.play();
}
