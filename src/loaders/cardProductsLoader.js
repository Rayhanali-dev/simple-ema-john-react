import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const storedCard = getShoppingCart();
    console.log(storedCard);
    const saveCard = [];

    for(const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct)
        }
    }

    return saveCard;
}

export default cardProductsLoader