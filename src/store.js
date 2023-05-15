import { reactive } from "vue";

export const store = reactive({
    currentImage: 0,
    JumperArray: [
        {
            images: [
                '/img/jumper1.jpeg',
                '/img/jumper2.jpeg',
                'img/sfondo.png'
            ],
            name: '001Jumper',
            text: '100% wool, black serigraphy. Made with love in Turin.',
            price: '109$'
        }

    ]
})