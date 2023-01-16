const btnSalvar = document.querySelector("#btn1");
const order = document.querySelector("#order");
const printButton = document.querySelector("#print-btn");
const listaDePedidos = document.querySelector("#pedidos");

let pedidos = JSON.parse(localStorage.getItem("pedidos"));

btnSalvar.disabled = true; //botão de salvar desabilitado por enquanto
// console.log(order.value);

pedidos?.reverse().map((item, index) => {
 //  console.log(item);
 const itemLista = document.createElement("li");
 itemLista.innerText = `${item.pedido}\n`;

 listaDePedidos.appendChild(itemLista);
});

printButton.onclick = () => {
 window.print();
 // printButton.disabled = true;
 //  order.disabled = true;
 if (!order.value) {
  return;
 }

 let temp = JSON.parse(localStorage.getItem("pedidos"));

 if (!JSON.parse(localStorage.getItem("pedidos"))) {
  temp = [];
 }

 //  console.log(temp, "is how inside the func");

 let jsonpedido = {
  pedido: order.value,
 };

 //  console.log(jsonpedido);
 temp?.push(jsonpedido);
 //  console.log(temp, "inside the function push");

 localStorage.setItem("pedidos", JSON.stringify(temp));
 btnSalvar.disabled = false;
};

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
//   console.log(order.value);
//   localStorage.setItem("pedido", JSON.stringify());
//   //   criarPedido(order.value, pedidos);
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
//   p.push({ pedido: order.value });
//   localStorage.setItem("pedido", JSON.stringify(p));
//   console.log(p);
//   order.value = "y";
//   //   location.reload();
// }
