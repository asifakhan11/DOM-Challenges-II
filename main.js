let numsTD = 3;
let tds = document.getElementsByTagName("td");
console.log(tds);

for(let i=0;i< tds.length; i++){
tds[i].onclick = function(event) {
  color(event);
  console.log("hi");
}}

function myAddCol() {
    
    var row = document.getElementsByTagName("TR");
   for (var i =0; i< row.length; i++){
   var x = row[i].insertCell(0);
    x.innerHTML = "New col";
   }
   for(let i=0;i< tds.length; i++){
    tds[i].onclick = function(event) {
      color(event);
     console.log("hi");
}
}
   numsTD++;
  }

  function myDelCol() {
    var row = document.getElementsByTagName("TR");
    for (var i =0; i< row.length; i++){
    var x = row[i].deleteCell(0);
    }
    numsTD--;
  }

function myAddRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);

  for (var i =0; i<  numsTD; i++){
  var cell = row.insertCell(i);
  cell.innerHTML = "New row";
 
  }
  // let tds = document.getElementsByTagName("td");
  //   console.log(tds);

  for(let i=0;i< tds.length; i++){
    tds[i].onclick = function(event) {
      color(event);
      console.log("hi");
}
}
}

function myDelRow() {
  document.getElementById("myTable").deleteRow(0);
}

//Dropdown Menu ///////////////////////////////////////////////////

function myMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function color (event){
  let options = document.getElementsByTagName("option");
  //console.log(options);
  for (let i =0; i< options.length; i++){
    if (options[i].selected){
        event.target.style.backgroundColor = options[i].value;
    }
  }
}
