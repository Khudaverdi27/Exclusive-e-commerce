const pathsLinks = [
  {
    pathFromHref: "./header.html",
    aboutPathHref: "./about.html",
    pageFromName: "Home",
    pageToName: "About",
  },
  {
    pathFromHref: "./header.html",
    contactPathHref: "./contact.html",
    pageFromName: "Home",
    pageToName: "Contact",
  },
  {
    pathFromHref: "./header.html",
    cartPathHref: "./cart.html",
    pageFromName: "Home",
    pageToName: "Cart",
  },
];

const paths = pathsLinks
  .map((item) => {
    return `<a href="${item.pathFromHref}" class="arrivingPage">${item.pageFromName
      }</a><span><a href="${item[item.pageToName.toLowerCase() + "PathHref"]}"
  class="currentPage"><span class="pageSlash">/</span>${item.pageToName
      }</a></span>`;
  })
  .join("");
document.addEventListener("DOMContentLoaded", function () {
  const pathLinks = document.querySelector(".pathLinks");
  if (pathLinks) {
    pathLinks.innerHTML = paths;
  }
});


