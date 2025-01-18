// botones para cambiar de pantalla
const btnIqz =  document.getElementById("btn-L");
const btnDer = document.getElementById("btn-R");

// objeto para almacenar los datos
const viewInfo = {
    posicionView: 0,
// array para almacenar los datos de cada pantalla
    info: [
        {
        nombre: "pear",
        colTitle: "#03403f",
        colBg: "#c9e78a",
        colCan: "#e6ffde",
        seccion: "Pear"
    },
    {
        nombre: "apple",
        colTitle: "#f44336",
        colBg: "#ffb2b2",
        colCan: "#f2675a",
        seccion: "Apple"
    },
    {
        nombre: "exotic",
        colTitle: "#6464ff",
        colBg: "#c1bff2",
        colCan: "#9590f1",
        seccion: "Exotic"
    }
    ]
};
// bucle para mostrar los datos de cada pantalla(color de fondo y h2 de tras de la lata)
viewInfo.info.forEach(
    (vista) =>{
        document.getElementById(vista.seccion).style.backgroundColor = vista.colBg;
        document.getElementById(vista.seccion).innerHTML += `<h2 style='opacity: 0;'>${vista.seccion}</h2>`;
    }
);


// otra manera de hacerlo (mas eficiente y corta pero menos entendible)
// document.getElementById(viewInfo.info[viewInfo.posicionView].seccion).querySelector('h2').className = "mostrar-h2";
// document.getElementById(viewInfo.info[viewInfo.posicionView].seccion).querySelector('h2').className = "ocultar-h2";
// se repite lo mismo solo que sin crear la funcion ocultar y mostrar h2


// se coloca aqui la funcion para que salga la primera pantalla
animar("mostrar mostrar_inicial");
// funcion para mostrar la pantalla (es para una clase que quiero que se active y poder animarla)
function animar(animacion){
    let toda_la_info = viewInfo.info;
    let vista_que_quiero = viewInfo.posicionView;
    
    let info_que_quiero = toda_la_info[vista_que_quiero];
    let id_que_quiero = info_que_quiero.seccion;
    
    let seccion_que_quiero = document.getElementById(id_que_quiero);
    
    seccion_que_quiero.className = animacion;
}



// esta funcion actualizar es para que cuando se cambie de pantalla se actualice la posicion de la vista
actulizar()

let direccion = 1;
setInterval(
    () =>{
        if(direccion == 1){
            ir_der();
            if (viewInfo.posicionView == viewInfo.info.length - 1){
                direccion = -1;
            }
        }else{
            ir_izq();
            if(viewInfo.posicionView == 0){
                direccion = 1;
            }
        }
    },
    5000
);

// funcion para actualizar la posicion de la vista (boton izquierdo)
btnIqz.addEventListener("click", ir_izq);
function ir_izq(){
    if (viewInfo.posicionView > 0){
        animar('ocultar');
        viewInfo.posicionView =  (viewInfo.posicionView - 1);
        animar('mostrar');
        actulizar()
    }
};

// funcion para actualizar la posicion de la vista (boton derecho)
function ir_der(){
btnDer.addEventListener("click", ir_der);
    if (viewInfo.posicionView < viewInfo.info.length - 1){
        animar('ocultar');
        viewInfo.posicionView = (viewInfo.posicionView + 1);
        animar('mostrar');
        actulizar()
    }
}



function actulizar(){
    console.log(viewInfo.posicionView);
    // esto es para que cuando estemos en ciertas vista se desaparezcan cierto boton
    // se lleva a cabo con operadores ternarios
    btnIqz.style.display =  viewInfo.posicionView > 0 ? "flex" : "none";
    btnDer.style.display =  viewInfo.posicionView < viewInfo.info.length - 1 ? "flex" : "none";

    // setPropety como funcionan? El método setProperty en JavaScript se utiliza para establecer un nuevo valor para una propiedad en un objeto de declaración de estilo CSS. Permite modificar dinámicamente los estilos de un elemento, asegurando que los nombres de las propiedades se mantengan consistentes entre CSS y JavaScript.
    if( viewInfo.posicionView < viewInfo.info.length - 1){
    btnDer.style.setProperty("--colorBoton", viewInfo.info[viewInfo.posicionView + 1].colCan);
    };
    if (viewInfo.posicionView > 0){
        btnIqz.style.setProperty("--colorBoton", viewInfo.info[viewInfo.posicionView - 1].colCan);
    };



    document.querySelector(".frutas").style.left = `${viewInfo.posicionView * -100}%`;
    document.querySelector("img[alt='etiqueta']").style.left = `${viewInfo.posicionView * -100}%`;
    document.querySelector('h1').style.color = viewInfo.info[viewInfo.posicionView].colTitle;
}