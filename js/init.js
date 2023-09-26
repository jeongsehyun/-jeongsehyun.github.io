window.onload = function () {
  fetch("./posts/230926.md")
    .then((response) => response.text())
    .then((result) => (document.getElementById("content").innerHTML = marked.marked(result)));
};
