document.getElementById("saveBtn").onclick = function() {
	if(document.getElementById("name").value == "" || document.getElementById("brand").value == "" || document.getElementById("madein").value == "" || document.getElementById("price").value == 0) {
		alert("Favor de llenar todos los campos correctamente")
	}
}