const workers = [
  {
    id: 1,
    imgSrc: "assets/images/aboutPageImg/worker1.png",
    name: "Will Smith",
    position: "Founder & Chairman",
    socaialIcon1: "assets/images/aboutPageImg/Group (4).svg",
    socaialIcon2: "assets/images/aboutPageImg/Group (3).svg",
    socaialIcon3: "assets/images/aboutPageImg/Icon-Linkedin (1).svg",
  },
  {
    id: 2,
    imgSrc: "assets/images/aboutPageImg/worker3.png",
    name: "Emma Watson",
    position: "Product Designer",
    socaialIcon1: "assets/images/aboutPageImg/Group (4).svg",
    socaialIcon2: "assets/images/aboutPageImg/Group (3).svg",
    socaialIcon3: "assets/images/aboutPageImg/Icon-Linkedin (1).svg",
  },
  {
    id: 3,
    imgSrc: "assets/images/aboutPageImg/worker2.png",
    name: "Tom Cruise",
    position: "Managing Director",
    socaialIcon1: "assets/images/aboutPageImg/Group (4).svg",
    socaialIcon2: "assets/images/aboutPageImg/Group (3).svg",
    socaialIcon3: "assets/images/aboutPageImg/Icon-Linkedin (1).svg",
  },
];

const worker = workers
  .map((item) => {
    return `<div class=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-5 ">
  <img src="${item.imgSrc}" class="workersImages" alt="">
    <h3>${item.name}</h3>
    <p>${item.position}</p>
    <div class="socialIcons">
    <a href=""><img src="${item.socaialIcon1}" alt=""></a>
    <a href=""><img src="${item.socaialIcon2}" alt=""></a>
    <a href=""><img src="${item.socaialIcon3}" alt=""></a>
    </div>
    </div>
    `;
  })
  .join("");

const workersCards = document.querySelector(".rowContainer");
workersCards.innerHTML = worker;

export default worker;
