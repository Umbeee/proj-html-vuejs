<script>
import { store } from '../store';

export default {

    name: "CaroselloSubComp",
    data() {
        return { store };
    },
    methods: {
        // prev() {
        //     console.log('prev')

        //     store.currentImage--
        //     if (store.currentImage < 0) {
        //         store.currentImage = store.JumperArray[0].images.length - 1
        //     }
        // },
        // next() {
        //     console.log('next')

        //     store.currentImage++
        //     if (store.currentImage > store.JumperArray[0].images.length - 1) {
        //         store.currentImage = 0;
        //     }
        // },
        activateFunct(n) {
            store.currentImage = n;
            console.log(store.currentImage)
        }
    }
}

</script>


<template>
    <div class="img-container">
        <img :src="store.JumperArray[store.currentItem].images[store.currentImage]" alt="asd">
    </div>
    <div class="imgs-map">
        <div v-for="(elem, index) in store.JumperArray[store.currentItem].images" :key="index" class="thumb"
            @click="activateFunct(index)">
            <img :src="elem" alt="">
        </div>
        <!-- <div class="prev" @click="prev()"><i class="fa-solid fa-caret-up"></i></div>
        <div class="next" @click="next()"><i class="fa-solid fa-caret-down"></i></div> -->
        <div class="status"><span>{{ store.currentImage + 1 }}/5</span></div>
    </div>
</template>


<style lang="scss" scoped>
.img-container {
    height: 100%;

    img {
        height: 100%;
        width: 100%;
    }
}

.imgs-map {
    width: 200px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .thumb {
        height: calc(100% / 5);
        aspect-ratio: 1;
        margin-left: 50px;

        img {
            height: 100%;
        }
    }

    .thumb:hover {
        cursor: pointer;
        transition: 0.2s;
        opacity: 0.80;
    }

    .prev,
    .next {
        position: absolute;
        right: calc(80% + 12px);
        font-size: 30px;
    }

    .status {
        position: absolute;
        right: -5%;
        top: 5%;
        font-size: 30px;
    }

    .prev:hover,
    .next:hover {
        color: rgb(142, 142, 142);
        transition: 0.3s;
        cursor: pointer;
    }

    .prev {
        top: 43%;
    }

    .next {
        bottom: 43%;
    }

}
</style>