paragraphs = document.getElementsByClassName("paragraph");
headers1 = document.getElementsByClassName("header_1");
headers2 = document.getElementsByClassName("header_2");

for (h1 of headers1) {
  h1.textContent = "Header_1";
  h1.style.color = "#ff0000";
  h1.style.fontFamily = "'Courier New'"
  h1.style.backgroundColor = "#111111";
}

for (p of paragraphs) {
  p.textContent = "paragraph";
  p.style.color = "#ffff00";
  p.style.fontFamily = "'Courier New'";
  p.style.backgroundColor = "#111111";
}

for (h2 of headers2) {
  h2.textContent = "Header_2";
  h2.style.color = "#008000";
  h2.style.fontFamily = "'Courier New'";
  h2.style.backgroundColor = "#111111";
}
