'use strict';
const $table = document.querySelector('#tableWrp');
const $isOnlyActiveCheckbox = document.querySelector("#isOnlyActive");
const model = [{
    "id": 1,
    "parentId": 0,
    "isActive": true,
    "balance": "$3,655.34",
    "name": "Yolanda Chavez",
    "email": "yolandachavez@isoplex.com"
  },
  {
    "id": 2,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,247.87",
    "name": "Navarro Levy",
    "email": "navarrolevy@isoplex.com"
  },
  {
    "id": 3,
    "parentId": 2,
    "isActive": true,
    "balance": "$2,559.85",
    "name": "Wooten Hartman",
    "email": "wootenhartman@isoplex.com"
  },
  {
    "id": 4,
    "parentId": 3,
    "isActive": false,
    "balance": "$3,474.20",
    "name": "Mack Hess",
    "email": "mackhess@isoplex.com"
  },
  {
    "id": 5,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,231.49",
    "name": "Jocelyn Burch",
    "email": "jocelynburch@isoplex.com"
  },
  {
    "id": 6,
    "parentId": 5,
    "isActive": false,
    "balance": "$3,955.44",
    "name": "Prince Daniel",
    "email": "princedaniel@isoplex.com"
  },
  {
    "id": 7,
    "parentId": 5,
    "isActive": false,
    "balance": "$1,994.83",
    "name": "Newton Medina",
    "email": "newtonmedina@isoplex.com"
  },
  {
    "id": 8,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,311.17",
    "name": "Arnold Steele",
    "email": "arnoldsteele@isoplex.com"
  },
  {
    "id": 9,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,313.46",
    "name": "Kitty Glover",
    "email": "kittyglover@isoplex.com"
  },
  {
    "id": 10,
    "parentId": 9,
    "isActive": false,
    "balance": "$3,314.14",
    "name": "Pruitt Spencer",
    "email": "pruittspencer@isoplex.com"
  },
  {
    "id": 11,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,778.44",
    "name": "Stefanie Quinn",
    "email": "stefaniequinn@isoplex.com"
  },
  {
    "id": 12,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,141.37",
    "name": "Fox Mcpherson",
    "email": "foxmcpherson@isoplex.com"
  },
  {
    "id": 13,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,662.03",
    "name": "Rodriquez Young",
    "email": "rodriquezyoung@isoplex.com"
  },
  {
    "id": 14,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,573.84",
    "name": "Love Byers",
    "email": "lovebyers@isoplex.com"
  },
  {
    "id": 15,
    "parentId": 14,
    "isActive": false,
    "balance": "$1,254.07",
    "name": "Banks Short",
    "email": "banksshort@isoplex.com"
  },
  {
    "id": 16,
    "parentId": 14,
    "isActive": true,
    "balance": "$3,820.34",
    "name": "Guthrie Brown",
    "email": "guthriebrown@isoplex.com"
  },
  {
    "id": 17,
    "parentId": 16,
    "isActive": true,
    "balance": "$2,884.74",
    "name": "Kirsten Mcmahon",
    "email": "kirstenmcmahon@isoplex.com"
  },
  {
    "id": 18,
    "parentId": 1,
    "isActive": false,
    "balance": "$1,694.76",
    "name": "Mcbride Sykes",
    "email": "mcbridesykes@isoplex.com"
  },
  {
    "id": 19,
    "parentId": 1,
    "isActive": true,
    "balance": "$3,644.56",
    "name": "Juanita Camacho",
    "email": "juanitacamacho@isoplex.com"
  },
  {
    "id": 20,
    "parentId": 17,
    "isActive": false,
    "balance": "$1,179.25",
    "name": "Carlene Little",
    "email": "carlenelittle@isoplex.com"
  },
  {
    "id": 21,
    "parentId": 0,
    "isActive": true,
    "balance": "$3,506.90",
    "name": "Caitlin Bernard",
    "email": "caitlinbernard@isoplex.com"
  },
  {
    "id": 22,
    "parentId": 21,
    "isActive": false,
    "balance": "$2,924.31",
    "name": "Vargas Lowe",
    "email": "vargaslowe@isoplex.com"
  },
  {
    "id": 23,
    "parentId": 22,
    "isActive": false,
    "balance": "$1,211.95",
    "name": "Mae Santiago",
    "email": "maesantiago@isoplex.com"
  },
  {
    "id": 24,
    "parentId": 22,
    "isActive": true,
    "balance": "$2,959.37",
    "name": "Gallagher Burnett",
    "email": "gallagherburnett@isoplex.com"
  },
  {
    "id": 25,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,880.20",
    "name": "Reyna Mayo",
    "email": "reynamayo@isoplex.com"
  },
  {
    "id": 26,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,639.69",
    "name": "Hardy Townsend",
    "email": "hardytownsend@isoplex.com"
  },
  {
    "id": 27,
    "parentId": 0,
    "isActive": false,
    "balance": "$3,211.26",
    "name": "Cohen Best",
    "email": "cohenbest@isoplex.com"
  },
  {
    "id": 28,
    "parentId": 27,
    "isActive": true,
    "balance": "$2,270.94",
    "name": "Sherrie Berger",
    "email": "sherrieberger@isoplex.com"
  },
  {
    "id": 29,
    "parentId": 27,
    "isActive": false,
    "balance": "$2,049.45",
    "name": "Gentry Robbins",
    "email": "gentryrobbins@isoplex.com"
  },
  {
    "id": 30,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,177.86",
    "name": "Etta Sampson",
    "email": "ettasampson@isoplex.com"
  }
];

// is checkbox checked 
let isOnlyActive = $isOnlyActiveCheckbox.hasAttribute("checked");

// when user click on open arrow
const onOpenRowClick = (rowId) => {
  const $chekedRow = [...document.querySelectorAll('.rowWrp')].filter(row => row.id == rowId)[0];
  const $openArrow = document.getElementById(`openArrow${rowId}`);
  const $closeArrow = document.getElementById(`closeArrow${rowId}`);
  const childRowsData = !isOnlyActive ? model.filter(row => row.parentId === rowId) : model.filter(row => row.parentId === rowId && row.isActive);
  const childRowsHTML = childRowsData.map((row) => createRow(row)).join('');

  $chekedRow.setAttribute("class", "rowWrp opened");
  $chekedRow.insertAdjacentHTML('beforeend', `${childRowsHTML}`);
  $openArrow.setAttribute("class", "popupIcon hidden");
  $closeArrow.setAttribute("class", "popupIcon");
}

// when user click on close arrow
const onCloseRowClick = (rowId) => {
  const $chekedRow = [...document.querySelectorAll('.rowWrp')].filter(row => row.id == rowId)[0];
  const $openArrow = document.getElementById(`openArrow${rowId}`);
  const $closeArrow = document.getElementById(`closeArrow${rowId}`);
  const childRowsData = !isOnlyActive ? model.filter(row => row.parentId === rowId) : model.filter(row => row.parentId === rowId && row.isActive);

  childRowsData.forEach(childRow => {
    $chekedRow.removeChild(document.getElementById(`${childRow.id}`))
  });
  $openArrow.setAttribute("class", "popupIcon");
  $closeArrow.setAttribute("class", "popupIcon hidden");
}


// return both, open and close arrow with different listeners
const popupIcon = (rowId) => {
  const icon = `<span id = "openArrow${rowId}" onclick = "onOpenRowClick(${rowId})" class = "popupIcon">&#9660;</span><span id = "closeArrow${rowId}" onclick = "onCloseRowClick(${rowId})" class = "popupIcon hidden">&#9650;</span>`;
  return icon;
}

//take one row from model and return html (string)
const createRow = (row) => {
  const isHasChild = !isOnlyActive 
          ? model.some(numRow => numRow.parentId === row.id) 
          : model.some(numRow => {return numRow.parentId === row.id && numRow.isActive});


  const rowString = `<div id = "${row.id}" class = "rowWrp"><div class = "row"><div class = "cell id">${row.id} ${isHasChild ? popupIcon(row.id) : ''}</div><div class = "cell name">${row.name}</div><div class = "cell balance">${row.balance}</div><div class = "cell email">${row.email}</div></div></div>`;
  return rowString;
}

// Constant with html of first row
const header = `<div class = "row"><div class = "th id">Number</div><div class = "th name">Name</div><div class = "th balance">Balance</div><div class = "th email">E-mail</div></div>`;


// return string with top level of table html
const createFirstLevelRows = () => {
  let rows = '';
  isOnlyActive ?
    model.filter(row => {
      return row.isActive && row.parentId === 0
    }).forEach((row) => {
      rows += createRow(row);
    }) :
    model.filter(row => {
      return row.parentId === 0
    }).forEach((row) => {
      rows += createRow(row);
    });
  return rows
}

// insert html on DOM
const renderTable = () => {
  $table.innerHTML = '';
  $table.insertAdjacentHTML('beforeend', `<div class = "table"><div class = "thead">${header}</div><div class = "tbody">${createFirstLevelRows()}</div></div>`);
}

//add listener on checkbox and rerender when change
const togleIsOnlyActive = () => {
  $isOnlyActiveCheckbox.addEventListener('click', () => {
    $isOnlyActiveCheckbox.toggleAttribute("checked");
    isOnlyActive = $isOnlyActiveCheckbox.hasAttribute("checked");
    renderTable();
  })

}
togleIsOnlyActive() 

renderTable();