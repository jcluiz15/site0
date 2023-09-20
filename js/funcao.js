var agendar= [];

// Salvando os Dados em Json
function saveListStorage(agendar){
	var jsonStr = JSON.stringify(agendar);
	localStorage.setItem("agendar",jsonStr);
}

// Identifica o Registro Salvo
function initListStorage(){
	var testList = localStorage.getItem("agendar");
	if(testList){
		agendar = JSON.parse(testList);
	}
	setList(agendar);
}
initListStorage();

//Criando a Tabela no Front-End
function setList(agendar){
	var table = '<thead class="table-dark"><tr><td></td><td>Nome Responsavel</td><td>Nome Criança</td><td>Celular</td><td>Data</td></tr></thead><tbody>';
	for(var key in agendar){
		table += '<tr><td></td><td>'+ formatNomeResponsavel(agendar[key].nomeResponsavel) +'</td><td>'+ formatNomeCrianca(agendar[key].nomeCrianca) +'</td><td>'+ formatCelular(agendar[key].celular) + '</td> <td>'+formatFesta(agendar[key].festa) + '</td></tr>';
	}
	table += '</tbody>';
	document.getElementById('listTable').innerHTML = table;
	saveListStorage(agendar);
}

function formatNomeResponsavel(nomeResponsavel){
	var str = nomeResponsavel.toUpperCase();
	return str;
}

function formatNomeCrianca(nomeCrianca){
	var str = nomeCrianca.toUpperCase();
	return str;
}

function formatCelular(celular){
	var str = celular;
	return str;
}

function formatFesta(festa){
	var str = festa;
	return str;
}

function addData(){
	
		var nomeResponsavel = document.getElementById("nomeResponsavel").value;
		var nomeCrianca = document.getElementById("nomeCrianca").value;
		var celular = document.getElementById("celular").value;
		var festa = document.getElementById("festa").value;
		agendar.unshift({"nomeResponsavel":nomeResponsavel, "nomeCrianca":nomeCrianca,"celular":celular, "festa":festa});
		setList(agendar);
		// resetForm();
	}
	

// function resetForm(){
// 	document.getElementById("nome").value="";
// 	document.getElementById("sobrenome").value="";
// 	document.getElementById("email").value="";
// 	document.getElementById("status").value="";
// 	document.getElementById("senha").value="";
// 	document.getElementById("csenha").value="";
// 	document.getElementById("btnUpdate").style.display = "none";
// 	document.getElementById("btnAdd").style.display = "inline-block";
// 	document.getElementById("inputIDUpdate").innerHTML = "";
// }

