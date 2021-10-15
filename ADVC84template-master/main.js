

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}



function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		ifelse((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function my_keydown(e)

	keyPressed = e.keyCode
	console.log(keyPressed);

    if((keyPressed >=99 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
        aplhabetkey();
		document.getElementById("d1").innerHTML="you pressed Alphabet Key";
		console.log(aplhabetkey)
	}
	function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}

function my_keydown(e)

	keyPressed = e.keyCode
	console.log(keyPressed);

    if((keyPressed >=48 && keyPressed<=57)
	
        numberkey();
		document.getElementById("d1").innerHTML="you pressed Number Key";
		console.log(numberkey)
	

function numberkey()
{
	img_image="numkey.png";
	add();

}


function my_keydown(e)

	keyPressed = e.keyCode
	console.log(keyPressed);

    if((keyPressed >=37 && keyPressed<=40)
	
        arrowkey();
		document.getElementById("d1").innerHTML="you pressed Arrow Key";
		console.log(arrowkey)
	

function arrowkey()
{

	img_image="Arrkey.png"
	add();

}

function my_keydown(e)

	keyPressed = e.keyCode
	console.log(keyPressed);

    if((keyPressed >=17/18/27
	
        special key();
		document.getElementById("d1").innerHTML="you pressed Special Key";
		console.log(specialkey)
	

function specialkey()
{
	specialkey.png
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
