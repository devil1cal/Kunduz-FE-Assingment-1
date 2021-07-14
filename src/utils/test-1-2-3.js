//1th
/*var request = new XMLHttpRequest();
 *
 *var data = "{}";
 *request.open(
 *	"GET",
 *	"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
 *	true
 *);
 *
 *request.send(data);
 *
 *request.addEventListener("readystatechange", function () {
 *	if (this.readyState === this.DONE) {
 *	//	console.log(this.response);
 *
 *		var data = JSON.parse(this.response);
 *		var div = "";
 *		for (var i = 0; i < data.length; i++) {
 *
 *     div += "<div>" + "\n" + data[i].title + "\n"+ "</div>" ; //for firefox
 *
 *		}
 *		document.getElementById("mydiv").innerHTML = div;
 *	}
 *}); //2th
 *var request = new XMLHttpRequest();
 *
 *var data = "{}";
 *request.open(
 *	"GET",
 *	"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
 *	true
 *);
 *
 *request.send(data);
 *
 *request.onload = function () {
 *	if (request.status === 200) {
 *		console.log(this.response);
 *
 *		var data = JSON.parse(this.response);
 *		var div = "";
 *		for (var i = 0; i < data.length; i++) {
 *			div +=
 *				"\n User:" +
 *				data[i].index +
 *
 *				"<br>" +
 *				"<br>" +
 *				"\n"; //for firefox
 *		}
 *		document.getElementById("mydiv").innerHTML = div;
 *	}
 *}; //3th
 *var request = new XMLHttpRequest();
 *request.open("GET", "https://hacker-news.firebaseio.com/v0/item/2.json?print=pretty", true);
 *request.send();
 *request.onload = function () {
 *	if (request.status === 200) {
 *		console.log("Success");
 *		// begin accessing JSON data here
 *		var data = JSON.parse(this.response);
 *		var div = "<div>";
 *
 *		for (var i = 0; i < data.length; i++) {
 *			div +=
 *				"\n User:" +
 *				data[i].title +
 *				"<br>" +
 *
 *
 *				"<br>" +
 *
 *				"\n"; //for firefox
 *		}
 *		document.getElementById("mydiv").innerHTML = div;
 *	}
 *};
 *request.onerror = () => {
 *	console.log("error");
 *};
 */
