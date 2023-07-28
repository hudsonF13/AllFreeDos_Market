const openOptions = document.getElementById("openOptions");
const mobileDivOptions = document.getElementById("mobileNavigation");
const linkHomePage = document.getElementById("linkHomePage");
const colections = document.getElementById("colections");
const divColections = document.getElementById("showingColections");
const products = document.getElementById("products");
const divProducts = document.getElementById("showingProducts");
const contact = document.getElementById("contact");
const divContact = document.getElementById("showingContacts");
const aboutShop = document.getElementById("aboutShop");
const showDivListCart = document.getElementById("showDivListCart");
const divListCart = document.getElementById("allYourPurchase");
const buttonCloseDivListCart = document.getElementById("closeDivallYourPurchase");

const centralImage = document.getElementById("centralImage");
const imageOne = document.getElementById("buttonImageOne");
const imageTwo = document.getElementById("buttonImageTwo");
const imageThree = document.getElementById("buttonImageThree");
const imageFour = document.getElementById("buttonImageFour");

const superimposedDivProducts = document.getElementById("superimposedDivImageProducts");
const superimposedCentralImage = document.getElementById("superimposedImage");
const changeSuperimposedState = document.getElementById("showOrNotShowSuperimposed");
const superimposedImageOne = document.getElementById("buttonSuperimposedImageOne");
const superimposedImageTwo = document.getElementById("buttonSuperimposedImageTwo");
const superimposedImageThree = document.getElementById("buttonSuperimposedImageThree");
const superimposedImageFour = document.getElementById("buttonSuperimposedImageFour");

const addMore = document.getElementById("addMore");
const askProducts = document.getElementById("selectedProducts");
const decreaseMore = document.getElementById("decreaseMore");
const addToCart = document.getElementById("addCart");
const cartPopUpDiv = document.getElementById("pop-upCart");
const alertProductsSelectds = document.getElementById("alertProductsSelectds");
const alertNothingBought = document.getElementById("alertNothingBought");
const closePopUp = document.getElementById("buttonClosePop-up");
const goToCartList = document.getElementById("goToCartList");

const yourPurchaseDiv = document.getElementById("yourPurchaseDiv");
const imageYourPurchase = document.getElementById("imageYourPurchase");
const titleYourPurchase = document.getElementById("titleYourPurchase");
const priceYourPurchase = document.getElementById("priceYourPurchase");
const offPriceYourPurchase = document.getElementById("offPriceYourPurchase");
const amountYourPurchase = document.getElementById("amountYourPurchase");
const buyButton = document.getElementById("buyButton");
const completionBuy = document.getElementById("completionBuy");

//botão de conclusão de compra 
buyButton.disabled = true;
buyButton.style.cursor = "not-allowed";

function showAllOptions() {
    mobileDivOptions.classList.toggle("displayNone")
}

//subterfúgios do cabeçalho (header)
function showColections() {
    divColections.classList.toggle("displayNone")
};
function showProducts() {
    divProducts.classList.toggle("displayNone")
};
function showContacts() {
    divContact.classList.toggle("displayNone")
};
function openAbout() {
    window.open("https://github.com/hudsonF13")
};

//subterfúgios da lista de produtos escolhidos (carrinho)
function seeDivListCart() {
    divListCart.style.display = "flex"
}
function closeDivListCart() {
    divListCart.style.display = "none"
}

//lista de imagens dos produtos
let firstShoe = {
    file: "images/image-product-1-thumbnail.jpg"
};
let seecondShoe = {
    file: "images/image-product-2-thumbnail.jpg"
};
let thirdShoe = {
    file: "images/image-product-3-thumbnail.jpg"
};
let fourthShoe = {
    file: "images/image-product-4-thumbnail.jpg"
};
let index = 0;
let imageList = [firstShoe, seecondShoe, thirdShoe, fourthShoe];

//função que inicia as thumbnails dos produtos
function startProductImage() {
    centralImage.src = imageList[index].file;
    superimposedCentralImage.src = imageList[index].file
};

//funções que troca as thumbnails dos produtos
function showImageOne() {
    index = 0;
    centralImage.src = imageList[index].file;
    startProductImage()
}
function showImageTwo() {
    index = 1;
    centralImage.src = imageList[index].file;
    startProductImage()
}
function showImageThree() {
    index = 2;
    centralImage.src = imageList[index].file;
    startProductImage()
}
function showImageFour() {
    index = 3;
    centralImage.src = imageList[index].file;
    startProductImage()
}

//funções que iniciam, trocam e fecham a div de "imagens sobrepostas"
function showingSuperimposedImageDiv() {
    superimposedDivProducts.style.display = "flex"
}
function showSuperimposedImageOne() {
    index = 0;
    superimposedCentralImage.src = imageList[index].file
};
function showSuperimposedImageTwo() {
    index = 1;
    superimposedCentralImage.src = imageList[index].file
};
function showSuperimposedImageThree() {
    index = 2;
    superimposedCentralImage.src = imageList[index].file
};
function showSuperimposedImageFour() {
    index = 3;
    superimposedCentralImage.src = imageList[index].file
};
function closeSuperimposedDiv() {
    superimposedDivProducts.style.display = "none"
};

//funções que definem o número de produtos adicionados ao carrinho
let numberOfProducts = 0;
function addProducts() {
    let productAdded = numberOfProducts += 1;
    askProducts.value = productAdded
    amountYourPurchase.innerText = `Total: R$${(askProducts.value)*185},00`
};
function decreaseProducts() {
    let productDecreased = numberOfProducts -= 1;
    askProducts.value = productDecreased;
    amountYourPurchase.innerText = `Total: R$${(askProducts.value)*185},00`    
};
let overallProductsBought = askProducts.value;

let fallShoes = {
    image: "images/image-product-1.jpg",
    name: "Tênis de Outono",
    price: "R$ 185,00",
    offPrice: "30%",
};

//funcões que abrem a div da lista de produtos comprados
function addProductsToCart() {
    let overallProductsBought = askProducts.value;
    if (overallProductsBought <= 0) {
        buyButton.disabled = true;
        buyButton.style.cursor = "not-allowed";
        cartPopUpDiv.style.display = "flex";
        alertNothingBought.style.display = "flex";
        alertProductsSelectds.innerText = "Escolha o seu tênis";
        yourPurchaseDiv.style.display = "none";
    } else {
        buyButton.disabled = false;
        buyButton.style.cursor = "pointer";
        cartPopUpDiv.style.display = "flex";
        alertProductsSelectds.innerText = "O(s) produto(s) escolhidos foram adicionados ao Carrinnho";
        alertNothingBought.style.display = "none";
        yourPurchaseDiv.style.display = "flex";
        imageYourPurchase.src = fallShoes.image;
        titleYourPurchase.innerText = fallShoes.name;
        priceYourPurchase.innerText = fallShoes.price;
        offPriceYourPurchase.innerText = fallShoes.offPrice;
        amountYourPurchase.innerText = `Total: R$${(askProducts.value)*185},00`
    }
};
function closeDivPopUpCart() {
    cartPopUpDiv.style.display = "none"
};
function fromCartButtonForcloseDivListCart() {
    cartPopUpDiv.style.display = "none";
    divListCart.style.display = "flex"
};

//faz surgir o aviso de conclusão de compra
function completionPurchase() {
    completionBuy.style.display = "flex"
}

startProductImage();

openOptions.addEventListener("click", showAllOptions);
linkHomePage.addEventListener("click", openAbout);
colections.addEventListener("click", showColections);
products.addEventListener("click", showProducts);
contact.addEventListener("click", showContacts);
aboutShop.addEventListener("click", openAbout);
showDivListCart.addEventListener("click", seeDivListCart);
buttonCloseDivListCart.addEventListener("click", closeDivListCart);
goToCartList.addEventListener("click", fromCartButtonForcloseDivListCart);

centralImage.addEventListener("click", showingSuperimposedImageDiv);
imageOne.addEventListener("click", showImageOne);
imageTwo.addEventListener("click", showImageTwo);
imageThree.addEventListener("click", showImageThree);
imageFour.addEventListener("click", showImageFour);
superimposedImageOne.addEventListener("click", showSuperimposedImageOne);
superimposedImageTwo.addEventListener("click", showSuperimposedImageTwo);
superimposedImageThree.addEventListener("click", showSuperimposedImageThree);
superimposedImageFour.addEventListener("click", showSuperimposedImageFour);
changeSuperimposedState.addEventListener("click", closeSuperimposedDiv);

addMore.addEventListener("click", addProducts);
decreaseMore.addEventListener("click", decreaseProducts);
askProducts.addEventListener("input", addProductsToCart);
addToCart.addEventListener("click", addProductsToCart);
closePopUp.addEventListener("click", closeDivPopUpCart);
buyButton.addEventListener("click", completionPurchase);