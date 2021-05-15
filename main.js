var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '80') {
        console.log("p pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if (keyPressed == '77') {
        console.log("m pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }


    if (keyPressed == '87') {
        new_image('ironman_face.png');
        console.log("w");
    }

    if (keyPressed == '71') {
        new_image('thor_right_hand.png');
        console.log("g");
    }

    if (keyPressed == '76') {
        new_image('spiderman_body.png');
        console.log("l");
    }

    if (keyPressed == '84') {
        new_image('captain_america_left_hand.png');
        console.log("t");
    }

    if (keyPressed == '82') {
        new_image('hulk_legs.png');
        console.log("r");
    }

    if (keyPressed == '38') {
        player_y = player_y - 10;
        console.log("up");
        document.getElementById("current_x").innerHTML = player_x;
        document.getElementById("current_y").innerHTML = player_y;
    }

    if (keyPressed == '40') {
        player_y = player_y + 10;
        console.log("down");
        document.getElementById("current_x").innerHTML = player_x;
        document.getElementById("current_y").innerHTML = player_y;
    }

    if (keyPressed == '37') {
        player_x = player_x - 10;
        console.log("left");
        document.getElementById("current_x").innerHTML = player_x;
        document.getElementById("current_y").innerHTML = player_y;
    }

    if (keyPressed == '39') {
        player_x = player_x + 10;
        console.log("right");
        document.getElementById("current_x").innerHTML = player_x;
        document.getElementById("current_y").innerHTML = player_y;
    }
}
