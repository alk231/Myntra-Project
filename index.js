
window.onload = () => {
  let preLoader = document.querySelector(".site_loader");
  let header = document.querySelector(".header");

  // Hide the header
  header.style.visibility = "hidden";
  //preLoader.style.display = "none";
  setTimeout(() => {
    preLoader.style.display = "none";
    header.style.visibility = "visible";
}, 2000);
};
let BagList=[];
onloadingpage();
let chosenItem=document.querySelector(".item-container");
chosenItem.addEventListener("mouseover",AddEventListener);
// displayitemsOnhomePage();
// displayBagIcon();
function onloadingpage()
  {
    let BagListStr=localStorage.getItem('bagItem');
    BagList=BagListStr?JSON.parse(BagListStr):[];
    displayitemsOnhomePage();
    displayBagIcon();
  }
function displayBagIcon()
{
  let bagItemcount=document.querySelector(".bag-item-count");
  bagItemcount.innerText=BagList.length;
  if(BagList.length>0)
  {
    document.querySelector(".bag-item-count").style.visibility="visible";

  }
  else
  {
    document.querySelector(".bag-item-count").style.visibility="hidden";
  }
}
function AddEventListener()
{
  let itemsContainerElement=document.querySelector(".items-container");
  let innerHtml='';
  items.forEach(item=>
        innerHtml+= `<div class="item-container">
            <img class="image" src="${item.image}" alt="item-image">
          <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
          </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current Price">Rs ${item.current_price}</span>
            <span class="original Price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% off)</span>
          </div>
          <button class="button-add-bag" onclick="AddToBag(${item.id})">Add to Bag</button>
          </div>`);
  itemsContainerElement.innerHTML=innerHtml;
}
function AddToBag(itemId)
{
  console.log(itemId);
  BagList.push(itemId);
  console.log(BagList);
  localStorage.setItem('bagItem',JSON.stringify(BagList));
  displayBagIcon();
}
function displayitemsOnhomePage()
{
let itemsContainerElement=document.querySelector(".items-container");
if(!itemsContainerElement)
{
  return;
}
let innerHtml='';
items.forEach(item=>
      innerHtml+= `<div class="item-container">
          <img class="image" src="${item.image}" alt="item-image">
        <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current Price">Rs ${item.current_price}</span>
          <span class="original Price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% off)</span>
        </div>
        <button class="button-add-bag" onclick="AddToBag(${item.id})">Add to Bag</button>
        </div>`);
itemsContainerElement.innerHTML=innerHtml;
}