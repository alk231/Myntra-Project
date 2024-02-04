let BagListobject;
const ConvenienceFee=99;
onload();
function onload()
{
  loadBagItems();
  displayBagItem();
  BagSummary();
}
function loadBagItems()
{
  console.log(BagList);
  BagListobject=BagList.map(itemsId=>
  {
for(let i=0;i<items.length;i++)
{
  if(itemsId==items[i].id)
  {
    return items[i];
  }
}
});
}
function displayBagItem()
{
  let bagItemElement=document.querySelector(".bag-items-container");
  let innerHtml='';
  BagListobject.forEach(itemsobject => {
    innerHtml+=ItemGenerateHtml(itemsobject);
  });
  
  bagItemElement.innerHTML=innerHtml;
}
function removeFromBag(BagListId)
{
  check(BagListId);
  console.log(BagList);
  localStorage.setItem("bagItem",JSON.stringify(BagList));
  let bagcount=document.querySelector(".bag-item-count");
  bagcount.innerText=BagList.length;
  if(BagList.length>0)
  {
    document.querySelector(".bag-item-count").style.visibility="visible";

  }
  else
  {
    document.querySelector(".bag-item-count").style.visibility="hidden";
  }
  loadBagItems();
  displayBagItem();
  BagSummary();
}
function check(BagListId) {
  let index = BagList.indexOf(BagListId);
  if (index !== -1)
  {
    BagList.splice(index,1);
  }
  return;
}
  
function ItemGenerateHtml(BagListobject)
{
  return`
  <div class="item-left-part">
  <img class="bag-item-img" src="./${BagListobject.image}">
  </div>
  <div class="item-right-part">
  <div class="company">${BagListobject.company}</div>
  <div class="item-name">${BagListobject.item_name}</div>
  <div class="price-container">
    <span class="current-price">Rs${BagListobject.current_price}</span>
    <span class="original-price">Rs ${BagListobject.original_price}</span>
    <span class="discount-percentage">(${BagListobject.discount_percentage}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${BagListobject.return_period}days return available</span>
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${BagListobject.delivery_date}</span>
  </div>
  
<div class="remove-from-cart" onclick="removeFromBag(${BagListobject.id})">X</div>
</div>`
}
function BagSummary()
{
  let priceItem=document.querySelector(".price-item-value");
  let mrp=0;
  let totalDiscount=0;
  let totalAmount;
  BagListobject.forEach(item=>
    {
      mrp+=item.original_price;
      totalDiscount+=item.original_price-item.current_price;
    });
    totalAmount=mrp-totalDiscount+ConvenienceFee;
  document.querySelector(".bag-summary").innerHTML=
  `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${BagListobject.length} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs${mrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${totalAmount}</span>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`
}

            