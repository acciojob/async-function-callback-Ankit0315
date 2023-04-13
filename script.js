function click() {
	const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch("https://jsonplaceholder.typicode.com/posts/1").then((resp))
	return resp.json();
}.then((data))=>{
	console.log(data);
}


//your JS code here. If required.
