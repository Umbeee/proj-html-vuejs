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
            if (store.currentImage < 0) {
                store.currentImage = store.JumperArray[0].images.length - 1
            }
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
        <img :src="store.JumperArray[store.currentItem].images[store.currentImage]" alt="asd">
    </div>
    <div class="imgs-map">
        <div class="prev" @click="prev()"><i class="fa-solid fa-caret-up"></i></div>
        <div class="next" @click="next()"><i class="fa-solid fa-caret-down"></i></div>
        <div class="status"><span>{{ store.currentImage + 1 }} /5</span></div>
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

    .prev,
    .next {
        position: absolute;
        right: calc(80% + 12px);
        font-size: 30px;
    }

    .status {
        position: absolute;
        right: 90%;
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