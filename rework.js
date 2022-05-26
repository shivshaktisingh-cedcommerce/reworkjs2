total=0;
 product=[];
 product[0]={company:"samsung",model:"galaxy",memory:64,price:15000};
 product[1]={company:"nokia",model:"S730",memory:128,price:22000};
 product[2]={company:"xiaomi",model:"note",memory:32,price:12000};
 product[3]={company:"motorola",model:"G10",memory:32,price:15000};
 product[4]={company:"apple",model:"S12",memory:64,price:25000};
 
 product[0].quantity=20;
 product[1].quantity=20;
 product[2].quantity=20;
 product[3].quantity=20;
 product[4].quantity=20;
function updatequan(){
  var companyname = document.getElementById("comp1").value;
  var quanti = document.getElementById("numbe").value;
  if(companyname=="samsung"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[0].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[0].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[0].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="nokia"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[1].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[1].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[1].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="apple"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[2].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[2].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[2].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="xiaomi"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[3].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[3].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[3].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="motorola"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[4].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[4].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[4].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
}

