function renderLatex(str) {
	str = $("#input-text").val()
	out = ""
	while (str.indexOf("$$") != -1) {
		mbox = "\\mbox{"+str.substring(str.indexOf("$$"),-1)+" }";
		str = str.substring(str.indexOf("$$")+2);
		out = out + mbox + str.substring(str.indexOf("$$"),-1); 
		str = str.substring(str.indexOf("$$")+2);
	}
	out = out + "\\mbox{"+str+" }";
	url = "http://latex.codecogs.com/gif.latex?"+out;
	$("#render-image").prop('src',url);
}