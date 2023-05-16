<script>

import { store } from '../store';
export default {

    name: "InfoProdotto",
    data() {
        return { store };
    }
}

</script>


<template>
    <h2><b>{{ store.JumperArray[store.currentItem].name }}</b></h2>
    <p>{{ store.JumperArray[store.currentItem].text }}</p>
    <p><b>{{ store.JumperArray[store.currentItem].price }}</b></p>
    <img :src="store.JumperArray[store.currentItem].detailImg" alt="asd">
</template>


<style lang="scss" scoped>
img {
    position: absolute;
    bottom: 5%;
    right: 18%;
    height: 200px;
    width: 200px;
}
</style>