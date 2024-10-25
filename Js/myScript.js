function myFunction() {
    document.getElementById('demo3').style.fontSize='35px';
    document.getElementById("demo3").innerHTML = "Cambió con JS Externo a color ROJO y a 35px";
    document.getElementById("demo3").style.color = "red";
}

function aumentar(){
    document.getElementById('demo2').style.fontSize = '35px';
    document.getElementById('demo2').style.color = 'blue';
}

function cambiarImagen(){
    const image = document.getElementById('myImage2');
    Image.src = (imagen.src.includes("cel.jpg")) ? 'ular.jpg': cel.jpg;
}