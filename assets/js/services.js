const services = [
  {
    imgSrc: "assets/images/aboutPageImg/Services (2).png",
    title: "FREE AND FAST DELIVERY",
    desciption: "Free delivery for all orders over $140",
  },
  {
    imgSrc: "assets/images/aboutPageImg/Services.png",
    title: "24/7 CUSTOMER SERVIC",
    desciption: "Friendly 24/7 customer support",
  },
  {
    imgSrc: "assets/images/aboutPageImg/Services (1).png",
    title: "MONEY BACK GUARANTEE",
    desciption: "We reurn money within 30 days",
  },
];
const service = services
  .map((items) => {
    return `  <div class="servicesCard crusor-p mx-auto col-12 mt-5 col-sm-12 col-md-6 col-lg-6 col-xl-4  text-center">
  <img src="${items.imgSrc}" alt="">
<h4 class="mt-4">${items.title}</h4 class="mt-4">
<p>${items.desciption}</p>
</div>`;
  })
  .join("");
const servicesContainer = document.getElementById("servicesContainer");
servicesContainer.innerHTML = service;
