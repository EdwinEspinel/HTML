const main=(value) => {
    var seleccion = document.getElementsByClassName('body');
    var seleccion2 = document.getElementsByClassName('h2');
    var seleccion3 = document.getElementsByClassName('header');
    var seleccion4 = document.getElementsByClassName('boton');
    var seleccion5 = document.getElementsByClassName('img');
    
    switch(Number(value)){
        case 1:
            sessionStorage.setItem("valor","1");
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.remove('estilo2-body');
                seleccion[i].classList.remove('estilo3-body');
                seleccion[i].classList.add('estilo1-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.remove('estilo2-h2');
                seleccion2[j].classList.remove('estilo3-h2');
                seleccion2[j].classList.add('estilo1-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.remove('estilo2-header');
                seleccion3[k].classList.remove('estilo3-header');
                seleccion3[k].classList.add('estilo1-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.remove('estilo2-boton');
                seleccion4[i].classList.remove('estilo3-boton');
                seleccion4[i].classList.add('estilo1-boton');
            }
            for (var j = 0; j < seleccion5.length; j++)
            {
                seleccion5[j].classList.remove('estilo2-img');
                seleccion5[j].classList.remove('estilo3-img');
                seleccion5[j].classList.add('estilo1-img');
            }      
            break;
        case 2:
            sessionStorage.setItem("valor","2");
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.remove('estilo1-body');
                seleccion[i].classList.remove('estilo3-body');
                seleccion[i].classList.add('estilo2-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.remove('estilo1-h2');
                seleccion2[j].classList.remove('estilo3-h2');
                seleccion2[j].classList.add('estilo2-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.remove('estilo1-header');
                seleccion3[k].classList.remove('estilo3-header');
                seleccion3[k].classList.add('estilo2-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.remove('estilo1-boton');
                seleccion4[i].classList.remove('estilo3-boton');
                seleccion4[i].classList.add('estilo2-boton');
            }
            for (var j = 0; j < seleccion5.length; j++)
            {
                seleccion5[j].classList.remove('estilo1-img');
                seleccion5[j].classList.remove('estilo3-img');
                seleccion5[j].classList.add('estilo2-img');
            }
            break;
        case 3:
            sessionStorage.setItem("valor","3");
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.remove('estilo1-body');
                seleccion[i].classList.remove('estilo2-body');
                seleccion[i].classList.add('estilo3-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.remove('estilo1-h2');
                seleccion2[j].classList.remove('estilo2-h2');
                seleccion2[j].classList.add('estilo3-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.remove('estilo1-header');
                seleccion3[k].classList.remove('estilo2-header');
                seleccion3[k].classList.add('estilo3-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.remove('estilo1-boton');
                seleccion4[i].classList.remove('estilo2-boton');
                seleccion4[i].classList.add('estilo3-boton');
            }
            for (var j = 0; j < seleccion5.length; j++)
            {
                seleccion5[j].classList.remove('estilo1-img');
                seleccion5[j].classList.remove('estilo2-img');
                seleccion5[j].classList.add('estilo3-img');
            }
            break;
        default:
            sessionStorage.setItem("valor","1");
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.add('estilo1-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.add('estilo1-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.add('estilo1-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.add('estilo1-boton');
            }
            for (var j = 0; j < seleccion5.length; j++)
            {
                seleccion5[j].classList.add('estilo1-img');
            }
            
            value=1;   
    }
    
};
const main2=(value) => {
    var value = sessionStorage.getItem("valor");
    var seleccion = document.getElementsByClassName('body');
    var seleccion2 = document.getElementsByClassName('h2');
    var seleccion3 = document.getElementsByClassName('header');
    var seleccion4 = document.getElementsByClassName('boton');
    
    console.log(value);
    switch(Number(value)){
        case 1:
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.add('estilo1-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.add('estilo1-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.add('estilo1-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.add('estilo1-boton');
            }
            break;
        case 2:
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.add('estilo2-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.add('estilo2-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.add('estilo2-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.add('estilo2-boton');
            }
            break;
        case 3:
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.add('estilo3-body');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.add('estilo3-h2');
            }
            for (var k = 0; k < seleccion3.length; k++)
            {
                seleccion3[k].classList.add('estilo3-header');
            }
            for (var i = 0; i < seleccion4.length; i++)
            {
                seleccion4[i].classList.add('estilo3-boton');
            }
            break;
        default:
    }
};
const mostrarFisico=() => {
    var fisico = document.getElementById('fisico');
    var estado = fisico.dataset.valueFisico;
    if (estado =='none'){
        fisico.style.display = 'block';
        fisico.dataset.valueFisico='block';
    }
    if (estado=='block'){
        fisico.style.display = 'none';
        fisico.dataset.valueFisico='none';
    }
};
const mostrarDiplomado=() => {
    var diplomado = document.getElementById('diplomado');
    var estado = diplomado.dataset.valueDiplomado;
    if (estado =='none'){
        diplomado.style.display = 'block';
        diplomado.dataset.valueDiplomado='block';
    }
    if (estado=='block'){
        diplomado.style.display = 'none';
        diplomado.dataset.valueDiplomado='none';
    }
};
const mostrarJuan=() => {
    var juan = document.getElementById('juan');
    var estado = juan.dataset.valueJuan;
    if (estado =='none'){
        juan.style.display = 'block';
        juan.dataset.valueJuan='block';
    }
    if (estado=='block'){
        juan.style.display = 'none';
        juan.dataset.valueJuan='none';
    }
};
const mostrarAneli=() => {
    var aneli = document.getElementById('aneli');
    var estado = aneli.dataset.valueAneli;
    if (estado =='none'){
        aneli.style.display = 'block';
        aneli.dataset.valueAneli='block';
    }
    if (estado=='block'){
        aneli.style.display = 'none';
        aneli.dataset.valueAneli='none';
    }
};
const mostrarJulio=() => {
    var julio = document.getElementById('julio');
    var estado = julio.dataset.valueJulio;
    if (estado =='none'){
        julio.style.display = 'block';
        julio.dataset.valueJulio='block';
    }
    if (estado=='block'){
        julio.style.display = 'none';
        julio.dataset.valueJulio='none';
    }
};

const mostrarAuxiliar=() => {
    var auxiliar = document.getElementById('auxiliar');
    var estado = auxiliar.dataset.valueAuxiliar;
    if (estado =='none'){
        auxiliar.style.display = 'block';
        auxiliar.dataset.valueAuxiliar='block';
    }
    if (estado=='block'){
        auxiliar.style.display = 'none';
        auxiliar.dataset.valueAuxiliar='none';
    }
};
const mostrarDocente=() => {
    var docente = document.getElementById('docente');
    var estado = docente.dataset.valueDocente;
    if (estado =='none'){
        docente.style.display = 'block';
        docente.dataset.valueDocente='block';
    }
    if (estado=='block'){
        docente.style.display = 'none';
        docente.dataset.valueDocente='none';
    }
};
const mostrarAsesorias=() => {
    var asesorias = document.getElementById('asesorias');
    var estado = asesorias.dataset.valueAsesorias;
    if (estado =='none'){
        asesorias.style.display = 'block';
        asesorias.dataset.valueAsesorias='block';
    }
    if (estado=='block'){
        asesorias.style.display = 'none';
        asesorias.dataset.valueAsesorias='none';
    }
};
const mostrarPython=() => {
    var python = document.getElementById('python');
    var estado = python.dataset.valuePython;
    if (estado =='none'){
        python.style.display = 'block';
        python.dataset.valuePython='block';
    }
    if (estado=='block'){
        python.style.display = 'none';
        python.dataset.valuePython='none';
    }
};

const mostrarPapa=() => {
    var papa = document.getElementById('papa');
    var estado = papa.dataset.valuePapa;
    if (estado =='none'){
        papa.style.display = 'block';
        papa.dataset.valuePapa='block';
    }
    if (estado=='block'){
        papa.style.display = 'none';
        papa.dataset.valuePapa='none';
    }
};
const mostrarMama=() => {
    var mama = document.getElementById('mama');
    var estado = mama.dataset.valueMama;
    if (estado =='none'){
        mama.style.display = 'block';
        mama.dataset.valueMama='block';
    }
    if (estado=='block'){
        mama.style.display = 'none';
        mama.dataset.valueMama='none';
    }
};
const mostrarHermana=() => {
    var hermana = document.getElementById('hermana');
    var estado = hermana.dataset.valueHermana;
    if (estado =='none'){
        hermana.style.display = 'block';
        hermana.dataset.valueHermana='block';
    }
    if (estado=='block'){
        hermana.style.display = 'none';
        hermana.dataset.valueHermana='none';
    }
};