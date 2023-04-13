
const url = "https://jsonplaceholder.typicode.com/posts/1";

async function getData(callback) {
  const response = await fetch(Url);
  const data = await response.json();
  callback(data.title);
}

document.getElementById("btn").addEventListener("click", async function() {
  getData((title) => {
    document.getElementById("output").innerHTML = title;
  });
});

//your JS code here. If required.
