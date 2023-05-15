import { reactive } from "vue";

export const store = reactive({
    currentImage: 2,
    currentItem: 0,
    JumperArray: [
        {
            images: [
                '/img/jumper1.png',
                '/img/jumper2.png',
                'img/jumper3.png',
                'img/jumper4.png',
                'img/jumper5.png'
            ],
            name: '001Jumper',
            text: '100% wool, black serigraphy. Made with love in Turin.',
            price: '109$'
        },
        {
            images: [
                '/img/trousers1.png',
                '/img/trousers2.png',
                'img/trousers3.png',
                'img/trousers4.png',
                'img/trousers5.png'
            ],
            name: '002SketchDenim',
            text: 'Off-White denim, black serigraphy. Made with love in Turin.',
            price: '129$'
        }

    ]
})