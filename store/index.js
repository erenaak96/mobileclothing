
let cart = localStorage.getItem('cart');
let cartCount = localStorage.getItem('cartCount');
export const state = () => ({
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
})

export const mutations = {
      addToCard(state,item) {
        let found = state.cart.find(product => product.name == item.name && product.size == item.size);
        //ITEM KARTIMIZDA MEVCUTSA QUANTITY ARTTIRIYORUZ
        if (found) {
            found.qty = found.qty + item.qty;
        } else {
            state.cart.push(item);
        }
        
        state.cartCount++;//CARD COUNT KISMINIDA ASLINDA SEPET İKONUN ÜZERİNDE GÖSTERMEK İÇİN HESAPLIYORUZ FAKAT BIRAZ YORULDUĞUM İÇİN BURAYI BIRAKTIM SONRASINDA GÜNCELLERİM DİLERSENİZ
        this.commit('saveCart');
    },
    removeFromCart(state, item) {//KARTIMIZDAN ITEM SİLİYORUZ QUANTITY 1DEN KÜÇÜKSE SİL DEĞİLSE QUANTİTY EKSİLT
        let found = state.cart.find(product => product.name == item.name && product.size == item.size);
        let index = state.cart.indexOf(found);
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount -= product.quantity;
            product.qty < 1 ? state.cart.splice(index, 1) : product.qty = product.qty -1;
        }
        this.commit('saveCart');
    },
    updateCart(state, item){//KART GÜNCELLİYORUZ 
        let found = state.cart.find(product => product.name == item.name && product.size == item.size);
        let index = state.cart.indexOf(found);
        if (index > -1) {
            let product = state.cart[index];
            product.qty = item.qty;
            product.qty < 1 ? state.cart.splice(index, 1) : '';
        }
        this.commit('saveCart');

    },
    saveCart(state) {//REFRESH DURUMUNDA STATELERİ KAYBETMEMEK İÇİN LOCAL STORAGE KULLANIYORUZ COOKİE DE KULLANILABİLİR.
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('cartCount', state.cartCount);
    }

}

export const actions = {

}

export const getters = {

}