<script>

export default {

    name: "HeaderComp"
}

</script>


<template>
    <header class="d-flex container">

        <div class="sx d-flex">
            <img src="/img/logo.png" alt="img" class="logo">
        </div>
        <div class="dx d-flex">
            <button class="btn">trousers</button>
            <button class="btn">jumpers</button>
        </div>

    </header>
</template>


<style lang="scss" scoped>
header {
    height: 10vh;
    color: rgb(21, 79, 65);
    align-items: center;
    justify-content: space-between;

    .logo {
        height: 80px;
        aspect-ratio: 1;
    }

    .dx {
        justify-content: flex-end;
        width: calc(50% - 50px);
    }

    .sx {
        justify-content: flex-end;
        width: calc(50% + 50px);
    }
}
</style>