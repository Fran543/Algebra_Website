
var ects  = 0, sati = 0;
var podaci = [];

function Kolegij(label, value) {
  this.label = label;
  this.value = value;
}

const xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    UploadData(JSON.parse(xhr.responseText));
  }
}
xhr.send();

function UploadData(data) {
  data.forEach(element => {
    podaci.push(new Kolegij(element.label, element.value));
  });
}

$(function () {

  var autocompletePostavke = {
    source: podaci,
    focus: function (e, ui) {
        e.preventDefault();
        $(this).val(ui.item.label);
    },
    select: function (e, ui) {
        e.preventDefault();
        $(this).val(ui.item.label);
        AddToTable(ui.item.value);
    }
  }

  $("#naziv_Kolegija").autocomplete(autocompletePostavke);

  $("#tbKolegij").on('click', '.btnDelete', function () {
    const table = document.querySelector('table');
    ects -= $(this).closest('tr').find('td:nth-child(2)').text()
    sati -= $(this).closest('tr').find('td:nth-child(3)').text();
    ShowFooter(ects, sati);
    $(this).closest('tr').remove();
    if ($("tbody").children().length  == 0) {
      table.style.visibility = "hidden";
    }
  });

})

function AddToTable(id) {
  var url = 'http://www.fulek.com/VUA/supit/GetKolegij/' + id;
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      ShowData(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();

}

function ShowData(data) {
  const tbody = document.querySelector('table tbody');
  const table = document.querySelector('table');
  table.style.visibility = "visible";
  ects += data.ects;
  sati += data.sati;
  tbody.innerHTML += `
    <tr>
      <td>${data.kolegij}</td>
      <td>${data.ects}</td>
      <td>${data.sati}</td>
      <td>${data.predavanja}</td>
      <td>${data.vjezbe}</td>
      <td>${data.tip}</td>
      <td><button type="button" class="btn btn-danger btnDelete">Obriši</button></td>
    </tr>
  `;
  ShowFooter(ects, sati);
}

function ShowFooter(ects, sati) {
  const tfoot = document.querySelector('table tfoot');
  if (tfoot.rows.length > 0) {
    tfoot.deleteRow (0);
  }
  tfoot.innerHTML += `
      <td><strong>Ukupno</strong></td>
      <td style ="color: rgb(182, 0, 0)"><strong>${ects}</strong></td>
      <td  style ="color: rgb(182, 0, 0)" colspan="5"><strong>${sati}</strong></td>
    </tr>
  `
}





