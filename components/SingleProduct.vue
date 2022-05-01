<template>
    <nuxt-link :to="productLink" class="single-product flex w-full p-2.5 mt-4 rounded-xl flex-col bg-softGray">
        <div class="w-full flex justify-end">
            <div class="bg-white w-8 h-8 flex items-center justify-center rounded-full">
                <span class="svg-icon icons-heart bg-mango"></span>
            </div>
        </div>
        <img class="max-h-24 object-contain" :src="productImage">
        <div class="pl-1.5 pb-1.5">
            <p class="text-sm font-semibold text-blue leading-8">{{productName}}</p>
            <span class="text-xs leading-6 font-semibold text-textSecondary">$ {{productPrice}}</span>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: "SingleProduct",
    props:["productLink","productName","productPrice","productImage"]

}
</script>

<style lang="scss">
    .single-product{
        max-width: calc(50% - .5rem);
    }
</style>