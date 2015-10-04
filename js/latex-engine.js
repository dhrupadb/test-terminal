function renderLatex() {
	str = $("#input-text").val()
	if (str.indexOf("$$") != -1) {
		alert("Math Mode activated!");
	}
	url = "http://latex.codecogs.com/gif.latex?"+str
	$("#render-image").prop('src',url)
}