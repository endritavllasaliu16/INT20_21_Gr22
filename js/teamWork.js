const id = document.getElementById("image_title");
let param = +document.getElementById("image_number").value;

const elements = [
  {
    title: "Front end developer",
    alt: "Front end developer",
    source: "images/portret1.jpg",
  },
  {
    title: "Back end developer",
    alt: "Back end developer",
    source: "images/portret2.jpg",
  },
  {
    title: "3D artist",
    alt: "3D artist",
    source: "images/portret3.jpg",
  },
  {
    title: "Team",
    alt: "Team",
    source: "images/teamwork.jpg",
  },
];
window.onload = function () {
  setInterval(() => {
    if (param >= elements.length) param = 0;
    setValues(param);
    param++;
  }, 3000);
};

function setValues(param = 0) {
  document.getElementById("image_title").innerHTML = elements[param].title;
  document.getElementById("image").src = elements[param].source;
  document.getElementById("image").alt = elements[param].alt;
}
