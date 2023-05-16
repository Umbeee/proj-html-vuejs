<script>
import CaroselloSubComp from './CaroselloSubComp.vue';
import InfoProdotto from './InfoProdottoSubComp.vue';
export default {

    name: "MainComp",
    components: {
        CaroselloSubComp,
        InfoProdotto
    }
}

</script>


<template>
    <main>
        <div class="container d-flex">
            <div class="sx">
                <CaroselloSubComp />
            </div>
            <div class="dx">
                <InfoProdotto />
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    border-bottom: 2mm ridge rgba(88, 88, 88, .6);
    background-color: rgb(238, 230, 214);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;

    .container {
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .sx {
            height: 500px;
            width: 700px;
            display: flex;
        }

        .dx {
            // border: thick double rgb(88, 88, 88);
            border: 2mm ridge rgba(88, 88, 88, .6);
            width: 320px;
            height: 500px;
            padding: 20px;
            position: relative;
        }
    }

}
</style>