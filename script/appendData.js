function appendData(productList, categoryType) {
  let container = document.querySelector(".container");
  container.innerHTML=""
  productList
    .filter((element) => element.category === categoryType)
    .forEach((element) => {
      let elementDiv = document.createElement("div");

      let image = document.createElement("img");
      image.src = element.image;
      image.id="imgElement"

      let title = document.createElement("h2");
      title.innerText = element.title;

      let price = document.createElement("h3");
      price.innerText = `$${element.price}`;

      let description = document.createElement("h4");
      description.innerText = element.description;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", function () {
        const updatedProductList=productList.filter(item=>item.id!=element.id)
        localStorage.setItem("productList", JSON.stringify(updatedProductList))
        appendData(updatedProductList,categoryType)
      })

      elementDiv.append(image, title, price, description, deleteBtn);
      container.append(elementDiv);
    });
}



export default appendData;
