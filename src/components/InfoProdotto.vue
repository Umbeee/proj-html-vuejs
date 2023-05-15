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
    <h2>{{ store.JumperArray[0].name }}</h2>
    <p>{{ store.JumperArray[0].text }}</p>
    <p>{{ store.JumperArray[0].price }}</p>
</template>


<style lang="scss" scoped></style>