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
        },
        jacket() {
            store.currentItem = 2;
            store.currentImage = 0;

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
                <button class="btn fw-bold" @click="trousers()">trousers 002</button>
                <button class="btn fw-bold" @click="jumpers()"> jumper 001</button>
                <button class="btn fw-bold" @click="jacket()">jacket 003</button>
            </div>
        </div>


    </header>
</template>


<style style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;
    height: 15vh;
    color: rgb(21, 79, 65);
    border-bottom: 2mm ridge rgba(88, 88, 88, .6);

    .container {
        height: 100%;
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
