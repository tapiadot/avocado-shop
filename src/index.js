const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

appNode.addEventListener("click", (event) => {
  if (event.target.nodeName === "H2") {
    window.alert(`Hello! Do you want a ${event.target.textContent}?`);
  }
});

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

// TODO: replace promises with async await
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      const image = document.createElement("img");
      document.body.appendChild(image);
      image.src = `${baseUrl}${item.image}`;
      image.classList.add("avocado-img");

      const title = document.createElement("h2");
      document.body.appendChild(title);
      title.textContent = item.name;
      title.classList.add("text-2xl", "text-red-600");

      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);

      const taste = document.createElement("div");
      taste.textContent = item.attributes.taste;
      taste.classList.add("taste");

      const container = document.createElement("div");
      container.append(image, title, price, taste);
      container.classList.add("avocado-item");

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
