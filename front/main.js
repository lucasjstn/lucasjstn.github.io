const btn = document.querySelector("#btn1");
const order = document.querySelector("#order");
const printButton = document.querySelector("#print-btn");
const listaDePedidos = document.querySelector("#pedidos");
const botaoRemover = document.querySelector("#btn-remove-item");
const botaoLimparStorage = document.querySelector("#btn-clear-storage");

botaoLimparStorage.addEventListener("click", () => {
    if (confirm("Deseja realmente apagar todos os dados?")) {
        localStorage.clear();
        location.reload();
    } else {
        return;
    }
});

let pedidos = JSON.parse(localStorage.getItem("pedidos"));
let itemIndisponivel = JSON.parse(localStorage.getItem("itemIndisponivel"));

console.log(itemIndisponivel);

botaoRemover.addEventListener("click", () => {
    const item = prompt("Remover Item:");

    if (!item) {
        return;
    }

    let temp = JSON.parse(localStorage.getItem("itemIndisponivel"));

    if (!temp) {
        temp = [];
    }
    // console.log("temp", temp);

    let response = {
        item: item,
    };

    temp.push(response);

    localStorage.setItem("itemIndisponivel", JSON.stringify(temp));
    location.reload();
});

pedidos?.reverse().map((item, index) => {
    console.log(item);
    const itemLista = document.createElement("li");
    itemLista.innerText = `${item.pedido}\n`;

    listaDePedidos.appendChild(itemLista);
});

printButton.onclick = () => {
    const texto = order.value;

    let allowPrint = 1;

    if (!order.value) {
        allowPrint = false;
        return;
    }

    const itemIndisponivel = JSON.parse(
        localStorage.getItem("itemIndisponivel")
    );
    // explain code gpt
    itemIndisponivel.map((object, index) => {
        if (order.value.includes(object.item)) {
            const errorMessage = document.querySelector("#error-message");

            console.log(errorMessage.classList.add("invalid"));

            errorMessage.innerHTML = `item ${object.item} indisponivel`;
            console.log("achou", object.item);
            allowPrint = false;
        }
    });
    console.log(itemIndisponivel);

    if (allowPrint) {
        window.print();
    } else {
        if (confirm("Item indisponível, imprimir mesmo assim?")) {
            window.print();
        } else {
            return;
        }
    }

    // se nao tiver nada cancela a funçao
    if (!order.value) {
        return;
    }

    // pega o objeto pedidos e armazena em temp
    let temp = JSON.parse(localStorage.getItem("pedidos"));

    // se o objeto de pedidos for vazio cria ele como array
    if (!JSON.parse(localStorage.getItem("pedidos"))) {
        temp = [];
    }

    // console.log(temp, "is how inside the func");

    let jsonpedido = {
        pedido: order.value,
    };

    // console.log(jsonpedido);
    temp?.push(jsonpedido);
    // console.log(temp, "inside the function push");

    localStorage.setItem("pedidos", JSON.stringify(temp));
    //window.print();
    // printButton.disabled = true;
    //  order.disabled = true;
};

btn.addEventListener("click", (event) => {
    event.preventDefault();

    location.reload();
});

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
