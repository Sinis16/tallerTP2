import { Serie } from "./serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const total: HTMLElement = document.getElementById("total-series")!;

seriesATabla(series);

total.innerHTML = `Promedio de temporadas: ${getPromedioSeas(series)}`;

actualizarCarta(1, series);

//Llenar la tabla
function seriesATabla(series: Serie[]): void {
    series.forEach(c => {
        
        let listaElement = document.createElement("tr");

        let clickId = function(fila: HTMLTableRowElement) 
            {
                return function() { 
                                        let cell = fila.getElementsByTagName("td")[0];
                                        let num = cell.innerHTML;
                                        alert("id:" + num);
                                        let n = +num;
                                        actualizarCarta(n, series)
                                 };
            };

        listaElement.onclick = clickId(listaElement);
            


        listaElement.innerHTML = `<td >${c.num}</td><td class = "noma" >${c.name}</td><td>${c.prod}</td><td>${c.seas}</td>`;

        seriesTbody.appendChild(listaElement);
    });
}

//Calcular promedio
function getPromedioSeas(series: Serie[]): number {
    let total: number = 0;
    series.forEach((serie) => total = total + serie.seas);
    return total
}

function actualizarCarta(id: number, series: Serie[]): void {
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


    let ser = series[id-1];
    alert(ser.name);
    (document.getElementById('cardImg') as HTMLImageElement).setAttribute("src", ser.img);
    console.log(ser.img);
    (document.getElementById('nomCard') as HTMLAnchorElement).textContent = ser.name;
    (document.getElementById('descCard') as HTMLAnchorElement).textContent = ser.desc;
    (document.getElementById('cardId') as HTMLAnchorElement).textContent = ser.pag;
    (document.getElementById('cardId') as HTMLAnchorElement).href = ser.pag;

}

/* https://stackoverflow.com/questions/39879672/using-typescript-how-to-update-html-elements-value-and-text */

