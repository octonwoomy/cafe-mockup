document.addEventListener("DOMContentLoaded", function () {
    let packs = [
      {
        id: 1,
        name: "Paldea Evolved",
        price: 4.00,
        image: "https://product-images.tcgplayer.com/493976.jpg",
      },
      {
        id: 2,
        name: "Obsidian Flames",
        price: 5.00,
        image: "https://product-images.tcgplayer.com/501256.jpg",
      },
      {
        id: 3,
        name: "Chilling Reign",
        price: 6.00,
        image: "https://product-images.tcgplayer.com/fit-in/437x437/236257.jpg",
      },
      {
        id: 4,
        name: "Evolving Cries",
        price: 8.00,
        image: "https://m.media-amazon.com/images/I/61HfONe953L._AC_SY879_.jpg",
      },
    ];
    let singles = [
      {
        id: 1,
        name: "Fauna lol",
        price: 100000,
        image: "https://product-images.tcgplayer.com/267855.jpg",
      },
      {
        id: 2,
        name: "Korone something",
        price: 10,
        image: "https://product-images.tcgplayer.com/267486.jpg",
      },
      {
        id: 3,
        name: "Aqua :3",
        price: 5,
        image: "https://www.cardcaverntradingcards.com/cdn/shop/products/Aquart_MinatoAquaE120R_600x.jpg?v=1652473739",
      },
      {
        id: 4,
        name: "Mommy Towa",
        price: 15,
        image: "https://crystal-cdn4.crystalcommerce.com/photos/6781708/26720620220615-11294-1osjeci.jpg",
      },
      {
        id: 5,
        name: "Hosimachi Suisei",
        price: 20,
        image: "https://crystal-cdn2.crystalcommerce.com/photos/6781811/26730920220615-11294-13lvkt6.jpg",
      },
    ];
  
    const productList = document.querySelector(".product-list");
    const singlesList = document.querySelector(".singles");
  
    function createProductCard(product, isSingle) {
      const article = document.createElement("article");
      article.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
      `;
      if (isSingle) {
        article.classList.add("single-article");
      }
      return article;
    }
  
    packs.forEach((pack) => {
      productList.appendChild(createProductCard(pack, false));
    });
  
    singles.forEach((single) => {
      singlesList.appendChild(createProductCard(single, true));
    });
  });
  