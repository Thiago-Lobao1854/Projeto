window.onload = function () {
  const editRow = (e) => {
    showModal();
    const id = parseInt(e.target.id);
    document.getElementById("editForm").onsubmit = (event) => edit(event, id);
  };

  const renderRows = () => {
    const productsJSON = localStorage.getItem("produtos");
    const products = JSON.parse(productsJSON);

    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    const rows = products.map((product, index, products) => {
      const tr = document.createElement("tr");
      const productColumn = document.createElement("td");
      const priceColumn = document.createElement("td");
      const editColumn = document.createElement("td");
      const deleteColumn = document.createElement("td");

      productColumn.innerHTML = product.nome;
      priceColumn.innerHTML = product.preco;

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "X";
      deleteColumn.appendChild(deleteButton);

      deleteButton.onclick = () => {
        deleteRow(products, product.id);
      };

      const editButton = document.createElement("button");
      editButton.innerHTML = "edit";
      editButton.id = product.id;
      editColumn.appendChild(editButton);
      editButton.onclick = editRow;

      tr.appendChild(productColumn);
      tr.appendChild(priceColumn);
      tr.appendChild(editColumn);
      tr.appendChild(deleteColumn);

      tbody.appendChild(tr);

      return product;
    });

    localStorage.setItem("produtos", JSON.stringify(rows));
  };

  renderRows();

  function edit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const arrayData = Array.from(formData.entries());

    const data = arrayData.reduce((acc, at) => {
      const [name, value] = at;
      acc[name] = value;
      return acc;
    }, {});

    const productsJSON = localStorage.getItem("produtos");
    const products = JSON.parse(productsJSON);

    const newProducts = products.map((p) => {
      if (p.id === id) {
        p = { ...p, ...data };
      }
      return p;
    });

    localStorage.setItem("produtos", JSON.stringify(newProducts));
    hideModal();
    setTimeout(() => {
      renderRows();
    }, 500);
  }

  const deleteRow = (data, id) => {
    const newRows = data.filter((p) => p.id !== id);
    localStorage.setItem("produtos", JSON.stringify(newRows));
    renderRows();
  };

  const hideModal = () => {
    const modal = document.getElementById("modal");
    modal.style.top = "-200%";
  };

  const showModal = () => {
    const modal = document.getElementById("modal");
    modal.style.top = "0";
  };

  const closes = document.querySelectorAll(".close");
  closes.forEach((close) => {
    close.onclick = hideModal;
  });
};
