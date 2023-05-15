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
    <h2>{{ store.JumperArray[store.currentItem].name }}</h2>
    <p>{{ store.JumperArray[store.currentItem].text }}</p>
    <p>{{ store.JumperArray[store.currentItem].price }}</p>
</template>


<style lang="scss" scoped></style>