const statistics = [
  {
    id: 1,
    imgSrc: "assets/images/aboutPageImg/statitc1.png",
    statisctic: "10.5 K",
    decription: "Sellers active on our site",
  },
  {
    id: 2,
    imgSrc: "assets/images/aboutPageImg/statitc4.png",
    statisctic: "33 K",
    decription: "Monthly Product Sale",
  },
  {
    id: 3,
    imgSrc: "assets/images/aboutPageImg/statitc3.png",
    statisctic: "45.5 K",
    decription: "Customers active on our site",
  },
  {
    id: 4,
    imgSrc: "assets/images/aboutPageImg/statitc4.png",
    statisctic: "25 K",
    decription: "Annual gross sale on our site",
  },
];

const statisticsContainer = document.getElementById("statisticsContainer");
const statistic = statistics
  .map((item) => {
    return `<div class="data-id-${item.id} statitcsCard text-center py-3 col-12 col-sm-12 col-md-5 col-lg-6 col-xl-2 mx-auto ">
                <img src="${item.imgSrc}" alt="">
                <h3 class="staticsCount mt-3">${item.statisctic}</h3>
                <p class="staticsCardText mb-3">${item.decription}</p>
            </div>`;
  })
  .join("");

statisticsContainer.innerHTML = statistic;
