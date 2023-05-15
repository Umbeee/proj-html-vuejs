<script>

export default {

    name: "MainComp"
}

</script>


<template>
    <main>
        <div class="container d-flex">
            <div class="sx">

            </div>
            <div class="dx">

            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    background-image: url('/img/sfondo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;

    .container {
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .sx {
            border: 1px dotted red;
            height: 500px;
            aspect-ratio: 1;
        }

        .dx {
            border: 1px dotted red;
            width: 100px;
            height: 500px;
        }
    }

}
</style>