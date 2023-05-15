<script>
import { store } from '../store';

export default {

    name: "CaroselloSubComp",
    data() {
        return { store };
    },
    methods: {
        prev() {
            console.log('prev')

            store.currentImage--
            console.log(store.currentImage)
            if (store.currentImage < 0) {
                store.currentImage = store.JumperArray[0].images.length - 1
            }
            console.log(store.currentImage)
        },
        next() {
            console.log('next')

            store.currentImage++

            if (store.currentImage > store.JumperArray[0].images.length - 1) {
                store.currentImage = 0;
            }
        }
    }
}

</script>


<template>
    <div class="img-container">
        <img :src="store.JumperArray[0].images[store.currentImage]" alt="asd">
    </div>
    <div class="imgs-map">
        <div class="prev" @click="prev()">p</div>
        <div class="next" @click="next()">n</div>
        <div v-for="(elem, index) in store.JumperArray[0].images" :key="index" class="thumb"
            :class="currentImage == index ? 'active' : ''">
            <img :src="elem" alt="asd" class="">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.img-container {
    height: 100%;
    aspect-ratio: 1;

    img {
        height: 100%;
    }
}

.imgs-map {
    width: 200px;
    height: 100%;
    position: relative;

    .prev,
    .next {
        position: absolute;
    }

    .prev {
        top: 0;
    }

    .next {
        bottom: 0;
    }

    .thumb {
        height: calc(100% / 3);

        img {
            height: 100%;
            aspect-ratio: 1;
        }
    }
}
</style>