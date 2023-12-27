const statistics = [
  {
    imgSrc: "assets/images/other/statitc1.png",
    title: "10.5 K",
    description: "Sellers active on our site",
    value: true,
  },
  {
    imgSrc: "assets/images/other/statitc4.png",
    title: "33 K",
    description: "Monthly Product Sale",
    value: true,
  },
  {
    imgSrc: "assets/images/other/statitc3.png",
    title: "45.5 K",
    description: "Customers active on our site",
    value: true,
  },
  {
    imgSrc: "assets/images/other/statitc4.png",
    title: "25 K",
    description: "Annual gross sale on our site",
    value: true,
  },
];
const services = [
  {
    imgSrc: "assets/images/other/Services (2).png",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    imgSrc: "assets/images/other/Services.png",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    imgSrc: "assets/images/other/Services (1).png",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const objectsToUi = (statistc) => {
  return statistc.map((item) => {
    return `<div class="  ${item.value ? "border " : "col-xl-4"
      } statitcsCard col-12 col-sm-12 col-md-5 col-lg-6 col-xl-2 px-3 mx-auto ">
<img class="mt-3" src="${item.imgSrc} " alt="">
<h4 class="staticsCount mt-3">${item.title}</h4>
<p class="mb-3">${item.description}</p>
</div>`;
  }).join("");
};
const result = objectsToUi(statistics);
const service = objectsToUi(services);

const statisticsContainer = document.getElementById("statisticsContainer");
const servicesContainer = document.getElementById("servicesContainer");
if (servicesContainer) {
  servicesContainer.innerHTML = service;
}
if (statisticsContainer) {
  statisticsContainer.innerHTML = result;
}


