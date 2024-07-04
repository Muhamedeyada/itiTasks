var bookName = document.querySelector("#bookName");
var backUp = [];
var bookPrice = document.querySelector("#bookPrice");
var authorName = document.querySelector("#authorName");
var authorEmail = document.querySelector("#authorEmail");
var emailRegx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var nameRegx = /^[A-Za-z]+$/;
var x = location.search.split("=")[1];

var form = document.querySelector("#container_form");
var table = document.getElementById("table");

function Author(x1, x2) {
  this.name = x1;
  this.email = x2;
}

function Book(x3, x4, author) {
  this.name = x3;
  this.price = x4;
  this.auth = author;
}

var submit = document.querySelector("#button");
var arr = [];

submit.addEventListener("click", function () {
  if (arr.length != x) {
    if (bookName.value == "") {
      document.getElementById("authorNameSpan").innerHTML =
        "Please Enter Book Name";
    } else if (bookPrice.value == "") {
      document.getElementById("authorPriceSpan").innerHTML =
        "Please Enter Book Price";
    } else if (authorName.value == "") {
      document.getElementById("authorName_span").innerHTML =
        "Please Enter Author Name";
    } else if (authorEmail.value == "") {
      document.getElementById("authorEmailSpan").innerHTML =
        "Please Enter Author Email";
    } else if (!nameRegx.test(authorName.value)) {
      document.getElementById("authorName_span").innerHTML =
        "Please Enter Valid Author Name";
    } else if (!emailRegx.test(authorEmail.value)) {
      document.getElementById("authorEmailSpan").innerHTML =
        "Please Enter Valid Author Email";
    } else {
      var author = new Author(authorName.value, authorEmail.value);
      var book1 = new Book(bookName.value, bookPrice.value, author);
      arr.push(book1);
      authorName.value = "";
      bookName.value = "";
      bookPrice.value = "";
      authorEmail.value = "";
      console.log(arr);
      document.getElementById("authorNameSpan").innerHTML = "";
      document.getElementById("authorPriceSpan").innerHTML = "";
      document.getElementById("authorNameSpan").innerHTML = "";
      document.getElementById("authorEmailSpan").innerHTML = "";
      if (arr.length == x) {
        table.style.display = "table";
        form.style.display = "none";
        arr.forEach(function (el) {
          var trNew = document.createElement("tr");
          var tdBookName = document.createElement("td");
          var tdBookPrice = document.createElement("td");
          var tdauthorName = document.createElement("td");
          var tdauthorEmail = document.createElement("td");
          var editBtn = document.createElement("button");

          var deleteBtn = document.createElement("button");
          tdBookName.textContent = el.name;
          tdBookPrice.textContent = el.price;
          tdauthorName.textContent = el.auth.name;
          tdauthorEmail.textContent = el.auth.email;
          editBtn.textContent = "Edit";
          deleteBtn.textContent = "Delete";
          trNew.appendChild(tdBookName);
          trNew.appendChild(tdBookPrice);
          trNew.appendChild(tdauthorName);
          trNew.appendChild(tdauthorEmail);
          trNew.appendChild(editBtn);
          trNew.appendChild(deleteBtn);
          document.getElementById("table").appendChild(trNew);
          reattachEventListeners(trNew, el);
        });
      }
    }
  }
});

function reattachEventListeners(row, el) {
  var editBtn = row.getElementsByTagName("button")[0];
  var deleteBtn = row.getElementsByTagName("button")[1];

  deleteBtn.addEventListener("click", function () {
    var index = arr.indexOf(el);
    backUp.push(arr.splice(index, 1));
    document.getElementById("table").removeChild(row);
  });

  editBtn.addEventListener("click", function () {
    var trnewcopy = row.cloneNode(true);
    row.innerHTML = `<td><input type="text" id="bookName_2" value="${el.name}"></td>
      <td><input type="number" id="bookPrice_2" value="${el.price}"></td>
      <td><input type="text" id="authName" value="${el.auth.name}"></td>
      <td><input type="email" id="authEmail" value="${el.auth.email}"></td>
      <td><button id="saveBtn">Save</button>
      <button id="canelBtn">Cancel</button></td>`;

    document.getElementById("canelBtn").addEventListener("click", function () {
      row.innerHTML = trnewcopy.innerHTML;
      reattachEventListeners(row, el);
    });

    document.getElementById("saveBtn").addEventListener("click", function () {
      el.name = document.getElementById("bookName_2").value;
      el.price = document.getElementById("bookPrice_2").value;
      el.auth.name = document.getElementById("authName").value;
      el.auth.email = document.getElementById("authEmail").value;
      row.innerHTML = `<td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.auth.name}</td>
        <td>${el.auth.email}</td>
        <td><button>Edit</button>
        <button>Delete</button></td>`;
      reattachEventListeners(row, el);
    });
  });
}
