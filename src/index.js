const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

// fetch web api
// connect to server
// TODO: replace promises with async await
window
  .fetch(`${baseUrl}/api/avo`)
  // process response and convert to JSON
  .then((response) => response.json())
  // JSON -> Data -> Render info browser
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      // create image
      const image = document.createElement("img");
      document.body.appendChild(image);
      image.src = `${baseUrl}${item.image}`;

      // create title
      const title = document.createElement("h2");
      document.body.appendChild(title);
      title.textContent = item.name;
      // title.style = "font-size: 3rem";
      // title.style.fontSize = "3rem";
      title.className = "text-2xl text-red-600";

      // create price
      // Intl
      // - format dates
      // - format currencies
      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);

      // TODO: make the site pretty with CSS
      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
