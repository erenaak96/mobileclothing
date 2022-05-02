<template>
  <div>
    <div class="card" v-if="cardData">
        <div class="bg-softGray h-screen w-screen flex justify-center items-center flex-col p-4" v-if="cartPaymentState === 'error'">
                <img :src="require('@/static/img/empty.png')">
                <p class="text-textSecondary font-normal text-center mt-2 tracking-wide text-sm leading-8">An error occured in payment state</p>
                <nuxt-link to="/card" class="bg-mango mt-4 text-softGray rounded-xl w-full h-12 flex justify-center items-center">
                    Go Back Card
                </nuxt-link>
        </div>
        <div v-else>
        <div class="flex justify-between items-center w-full p-4" >
                <span @click="$router.go(-1)" class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
                    <span class="svg-icon icons-chevron-left bg-blue absolute"></span>
                </span>
                <nuxt-link to="/" class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
                    <span class="svg-icon icons-close bg-blue"></span>
                </nuxt-link>
            </div>
            <h2 class="font-bold text-blue text-2xl leading-8 mx-auto text-center">Cart</h2>
            <div class="w-full p-4">
                <div class="cart-item p-4 mt-3.5 bg-softGray rounded-xl flex justify-between w-100 items-center" v-for="(item,index) in cardData" :key="index"> 
                    <div class="flex items-center">
                        <img class="w-14 h-14 object-contain" :src="item.image">
                        <div class="flex flex-col ml-4">
                            <p class="text-sm font-normal text-textSecondary">{{item.name}} ({{item.size}})</p>
                            <div class="rounded-lg bg-white px-2 py-1 max-w-max mt-2">
                                <Counter :count.sync="item.qty" @click.native="log(item)"/>
                            </div>
                        </div>
                    </div>
                    <span class="text-lg font-bold text-blue">${{item.price}}</span>
                </div>
                <div class="w-100 flex justify-between mt-4">
                    <p class="text-sm font-normal text-textSecondary">Total</p>
                <span class="text-xl font-bold text-blue">${{calculatedPrice}}</span>
                </div>
                <button @click="checkout()" 
                    class="rounded-xl w-full mt-4 h-12 text-white bg-blue flex items-center justify-center">
                    Checkout
                </button>
                {{cartPaymentState}}
                <stripe-checkout
                    ref="checkoutRef"
                    mode="payment"
                    :pk="pk"
                    :line-items="lineItems"
                    :successUrl="successURL"
                    :cancelUrl="cancelURL"
                    />
        </div>
        </div>
    </div>
    <div class="bg-softGray h-screen w-screen flex justify-center items-center flex-col p-4" v-else>
            <div v-if="cartPaymentState === 'success'">
                <img :src="require('@/static/img/success.png')">
                <p class="text-textSecondary font-normal mt-2 tracking-wide text-center text-sm leading-8">Order created successfully!</p>
                <nuxt-link to="/" class="bg-mango mt-4 text-softGray rounded-xl w-full h-12 flex justify-center items-center">
                    Go Homepage
                </nuxt-link>
            </div>
            <div v-else>
                <img :src="require('@/static/img/empty.png')">
                <p class="text-textSecondary font-normal text-center mt-2 tracking-wide text-sm leading-8">You have no items in cart.</p>
                <nuxt-link to="/" class="bg-mango mt-4 text-softGray rounded-xl w-full h-12 flex justify-center items-center">
                    Go Shop
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    data(){
        this.pk = process.env.STRIPE_PK;
        return{
            cardData: [],
            calculatedPrice: 0, 
            cartPaymentState: '',
             lineItems: [
             
            ],
            token: null,
            successURL: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
            cancelURL: process.client && `${window.location.origin}${window.location.pathname}?state=error`,
            // Misc
      redirectState: '',
        }
    },
    // computed:{
    //     getCardData:{
    //         get(){
    //             this.cardData= JSON.parse(localStorage.getItem("cart"));
    //             return this.cardData
    //         },
    //     }
    // },
    mounted(){
        
        let params = (new URL(document.location)).searchParams;
        this.cartPaymentState = params.get("state");
        if(this.cartPaymentState === 'success'){
            localStorage.removeItem("cart");
        }
        this.cardData= JSON.parse(localStorage.getItem("cart"));
        this.calculateCardTotal();
        this.createPaymentList();
    },
    methods:{
        checkout() {
            this.$refs.checkoutRef.redirectToCheckout();
        },
        calculateCardTotal(){
            if(this.cardData){
                this.cardData.map((item) =>{
                    let totalPrice = item.qty * item.price; 
                    this.calculatedPrice = this.calculatedPrice + totalPrice;
                 })
            }
        },
        createPaymentList(){
                if(this.cardData){
                    let last;
                const newData = this.cardData.map(i =>{
                    return{
                        price: i.priceSlug,
                        quantity: i.qty
                    }
                });
                let folded = newData.reduce(function(prev,curr){
                    if (last) {
                        if (last.price === curr.price) {
                            last.quantity += curr.quantity;
                            return prev;
                        }
                    }
                    last = curr;
                    prev.push(curr);
                    return prev;
                },[]);
               this.lineItems = folded;
               console.log(this.lineItems);
                }
        },
        log(item){
            console.log('changes')
            this.$store.commit('updateCart', item);
            this.cardData = JSON.parse(localStorage.getItem("cart"));
            this.calculatedPrice = 0;
            this.calculateCardTotal();
            this.createPaymentList();
            console.log(this.$store.state.cart);
        }
    },

}
</script>

<style lang="scss">

</style>