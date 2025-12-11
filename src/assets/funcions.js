export function yellowSubmarine(id) {
  const elem = document.getElementById(id);
  elem.style.color = "yellow";
}

export function changeSize(id, mida) {
  const taula = document.getElementById(id);
  taula.style.fontSize = mida;
}

export function countWords(id1) {
  const text = document.getElementById(id1).textContent.trim();
  const paraules = text.split(/\s+/);
  document.getElementById(id1).textContent = paraules.length;
}


