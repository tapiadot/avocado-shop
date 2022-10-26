const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

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

      // create price
      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
