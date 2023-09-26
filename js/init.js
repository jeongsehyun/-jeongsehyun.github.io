window.onload = function () {
  fetch("./posts/230926.md").then((response) => {
    document.getElementById("content").innerHTML = response;
  });
};
