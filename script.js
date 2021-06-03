// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ',' + (Math.random() * (0.9 - 0.5) + 0.5).toFixed(1) + ')';
} 

document.getElementById('project-titles').addEventListener('mouseover', event => {
  document.body.style.backgroundColor = randomColor();
});

// document.getElementById('project-titles').addEventListener('mouseout', event => {
//   document.body.style.backgroundColor = "#ffffff"
// });

window.addEventListener('load', (event) => {
  document.body.style.backgroundColor = randomColor();
});