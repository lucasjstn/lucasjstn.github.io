const btnSalvar = document.querySelector("#save-btn");
const textoPedido = document.querySelector("#texto-pedido");
const printButton = document.querySelector("#print-btn");
const listaDePedidos = document.querySelector("#pedidos");

let pedidos = JSON.parse(localStorage.getItem("pedidos"));
let notas = JSON.parse(localStorage.getItem("notas"));

console.log(notas);
console.log(pedidos);

btnSalvar.disabled = true; //botão de salvar desabilitado por enquanto

// this will iterate over the pedidos object and add as a child of listadePedidos
pedidos?.map((item, index) => {
 const itemLista = document.createElement("li");
 itemLista.innerText = `${item.pedido}\n`;

 listaDePedidos.appendChild(itemLista);
});

notas?.map((item, index) => {
 //  console.log(item);
 const itemNotas = document.createElement("li");
 itemNotas.innerText = `${item.pedido}\n`;

 listaDePedidos.appendChild(itemLista);
});

printButton.onclick = () => {
 window.print();

 if (!textoPedido.value) {
  return;
 }

 let temp = JSON.parse(localStorage.getItem("pedidos"));

 if (!JSON.parse(localStorage.getItem("pedidos"))) {
  temp = [];
 }

 let jsonpedido = {
  id: temp.length,
  pedido: textoPedido.value,
 };

 temp?.unshift(jsonpedido);

 localStorage.setItem("pedidos", JSON.stringify(temp));
 btnSalvar.disabled = false;
};

//this button will actually reload the page
btnSalvar.addEventListener("click", (event) => {
 event.preventDefault();

 location.reload();
});

function objectExists(obj, search) {
 return Object.keys(obj).some((key) => obj[key] === search);
}

//disabling and enabling notes
// const saveNote = document.querySelector("#save-note");
// const noteArea = document.querySelector("#notes-area");
// console.log(saveNote);
// saveNote.addEventListener("click", function (e) {
//  e.preventDefault();

//  console.log(saveNote.innerText == "editar nota");
//  if (saveNote.innerText == "editar nota") {
//   noteArea.disabled = false;
//   saveNote.innerText = "salvar nota";
//   return;
//  }

//  noteArea.disabled = true;
//  saveNote.innerText = "editar nota";
// });

// const note

// printButton.onclick = openPrinter;
// btn.onclick = salvaPedido;

// const p = [
//   { pedido: "xburguer", cliente: "fulano", horario: "tal" },
//   { pedido: "xburguer", cliente: "fulano", horario: "tal" },
// ];

// function openPrinter() {
//   //   window.print();
//   console.log(textoPedido.value);
//   localStorage.setItem("pedido", JSON.stringify());
//   //   criarPedido(textoPedido.value, pedidos);
// }
// // console.log(btn);
// // console.log(printButton);

// function criarPedido(text, pai) {
//   const item = document.createElement("li");
//   //   const texto = localStorage.getItem("pedido");
//   item.innerText = text;

//   pai.appendChild(item);
// }

// const obj = [JSON.parse(localStorage.getItem("pedido"))];
// console.log(obj[0]);

// obj[0].map((element, index) => {
//   criarPedido(element["pedido"], pedidos);
// });

// function salvaPedido() {
//   p.push({ pedido: textoPedido.value });
//   localStorage.setItem("pedido", JSON.stringify(p));
//   console.log(p);
//   textoPedido.value = "y";
//   //   location.reload();
// }
