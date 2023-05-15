<script>
import { store } from '../store';
export default {

    name: "HeaderComp",

    data() {
        return { store };
    },
    methods: {
        trousers() {
            store.currentItem = 1;
            console.log(store.currentItem)
            store.currentImage = 2;
        },
        jumpers() {
            store.currentItem = 0;
            console.log(store.currentItem)
            store.currentImage = 2;
        }
    }
}

</script>


<template>
    <header>
        <div class="d-flex container">
            <div class="sx d-flex">
                <img src="/img/logo.png" alt="img" class="logo">
            </div>
            <div class="dx d-flex">
                <button class="btn" @click="trousers()">trousers</button>
                <button class="btn" @click="jumpers()"> jumpers </button>
            </div>
        </div>


    </header>
</template>


<style style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    background-color: white;
    height: 10vh;
    color: rgb(21, 79, 65);

    .container {
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

        .btn:hover {
            background-color: rgb(243, 235, 219);
            text-decoration: underline;
            transition: 0.2s;
        }
    }

}
</style>
