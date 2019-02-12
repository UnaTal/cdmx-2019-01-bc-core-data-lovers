
// const dataToSearch = window.INJURIES;

const bottonstByMode = Array.from(document.getElementsByClassName('button-transport'));
const contentByMode = Array.from(document.getElementsByClassName('infoBody'));
const tableByMode = Array.from(document.getElementsByClassName('dataTable'));
let printOnce = [];


//Comprobamos que nos "jala" la data del modo que seleccionamos
//console.log(bottonstByMode[1]);

for (let i = 0; i < bottonstByMode.length; i++) {
  printOnce.push(true);
  bottonstByMode[i].addEventListener('click', function(e) {

    const accidentsData = getNeededData(e.target.name);
    hideAllContent();
    //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)

// Declaramos las variables de la sección de Year
let selectedYear = document.getElementById('selected_year');
let visualizeData = document.getElementById('visualize_data');
let resultGraphic = document.getElementById('result_graphic');
//Función para que al evento de click sobre el botón de Visualize Data
visualizeData.addEventListener("click", () => {
  let yearValue = selectedYear.value;
  //let visualizeValue = visualizeData.value;
  const resultData = window.data.consult(yearValue);
  console.log(resultData);

    showThePanel();
    contentByMode[i].style.display = 'block';
    //Print in the information panel all the information
    printTheData(accidentsData, tableByMode[i], printOnce[i]);
    printOnce[i] = false;
  });
}

function hideAllContent() {
  for (let i = 0; i < contentByMode.length; i++) {
    contentByMode[i].style.display = 'none';
  }
}

