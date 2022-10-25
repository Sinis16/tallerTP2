import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var total = document.getElementById("total-series");
seriesATabla(series);
total.innerHTML = "Promedio de temporadas: ".concat(getPromedioSeas(series));
actualizarCarta(1, series);
//Llenar la tabla
function seriesATabla(series) {
    series.forEach(function (c) {
        var listaElement = document.createElement("tr");
        var clickId = function (fila) {
            return function () {
                var cell = fila.getElementsByTagName("td")[0];
                var num = cell.innerHTML;
                alert("id:" + num);
                var n = +num;
                actualizarCarta(n, series);
            };
        };
        listaElement.onclick = clickId(listaElement);
        listaElement.innerHTML = "<td >".concat(c.num, "</td><td class = \"noma\" >").concat(c.name, "</td><td>").concat(c.prod, "</td><td>").concat(c.seas, "</td>");
        seriesTbody.appendChild(listaElement);
    });
}
//Calcular promedio
function getPromedioSeas(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.seas; });
    return total;
}
function actualizarCarta(id, series) {
    /* let ser = series[id-1];
    let cardImg: HTMLElement = document.getElementById("serieImg")!;
    let nomCard: HTMLElement = document.getElementById("nomCard")!;
    let descCard: HTMLElement = document.getElementById("descCard")!;
    let idCard: HTMLElement = document.getElementById("cardId")!;
    
    alert(ser.name);
    cardImg.innerHTML = `<img class="card-img-top" src=${ser.img} alt="Card image cap">`;
    nomCard.innerHTML = `${ser.name}`;
    descCard.innerHTML = `${ser.desc}`;
    idCard.innerHTML = `<a href=${ser.pag}>${ser.pag}</a>`; */
    var ser = series[id - 1];
    alert(ser.name);
    document.getElementById('cardImg').setAttribute("src", ser.img);
    console.log(ser.img);
    document.getElementById('nomCard').textContent = ser.name;
    document.getElementById('descCard').textContent = ser.desc;
    document.getElementById('cardId').textContent = ser.pag;
    document.getElementById('cardId').href = ser.pag;
}
/* https://stackoverflow.com/questions/39879672/using-typescript-how-to-update-html-elements-value-and-text */
