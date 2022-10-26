const url = "https://platzi-avo.vercel.app/api/avo";

// fetch web api
// connect to server
// TODO: replace promises with async await
window
  .fetch(url)
  // process response and convert to JSON
  .then((response) => response.json())
  // JSON -> Data -> Render info browser
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      // create image
      const image = document.createElement("img");
      document.body.appendChild(image);
      // create title
      const title = document.createElement("h2");
      document.body.appendChild(title);
      // create price
      const price = document.createElement("div");
      document.body.appendChild(price);

      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });

    document.body.append(...allItems);
  });
