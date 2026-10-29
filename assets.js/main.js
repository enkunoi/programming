const products = [
    {
        id: 1,
        title: "Ноутбук Apple MacBook Pro 16",
        price: 99999,
        category: "laptops",
        image: "images/apple-macBook-pro16.jpg",
    },
    {
        id: 2,
        title: "Смартфон Samsung Galaxy S24",
        price: 39999,
        category: "smartphones",
        image: "images/samsung-galaxy-S24.jpg",
    },
    {
        id: 3,
        title: "Смартфон Xiaomi Redmi Note 13 Pro",
        price: 10999,
        category: "smartphones",
        image: "images/xiaomi-redmi-note-13-Pro.jpg",
    },
    {
        id: 4,
        title: "Ноутбук Lenovo IdeaPad Slim 3 15IAH8",
        price: 22990,
        category: "laptops",
        image: "images/lenovo-IdeaPad-Slim-3-15IAH8.jpg",
    },
    {
        id: 5,
        title: "Смарт-телевізор LG OLED55C3RLA",
        price: 184999,
        category: "smarttv",
        image: "images/LG-OLED55C3RLA.jpg",
    },
    {
        id: 6,
        title: "Навушники Sony WH-1000XM5",
        price: 13999,
        category: "headphones",
        image: "images/Sony-WH-1000XM5.jpg",
    },
    {
        id: 7,
        title: "Док-станція для ноутбука Dell WD19S",
        price: 8999,
        category: "stations",
        image: "images/station-Dell-WD19S.jpg",
    },
    {
        id: 8,
        title: "Бездротова миша Logitech MX Master 3S",
        price: 3699,
        category: "computermouses",
        image: "images/Logitech-MX-Master-3S.jpg",
    },
    {
        id: 9,
        title: "Смартфон Apple iPhone 15 Pro Max",
        price: 40890,
        category: "smartphones",
        image: "images/Apple-iPhone-15-ProMax.jpg",
    },
]
const container = document.querySelector(".products-grid");

const htmlString = products
  .map((product) => {
    return `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price} грн</p>
            <button class="btn btn-buy" data-id="${product.id}">Купити</button>
        </article>
    `;
  })
  .join(""); 

container.innerHTML = htmlString;