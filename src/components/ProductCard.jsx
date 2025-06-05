export default function ProductCard() {
    const products = [
        {
            id: 1,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 2,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 3,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 4,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 5,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 6,
            name: 'Chicken & Fries',
            price: 79.99,
            image: './assets/images/image-4.jpg',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
    ]
    return (
        <div>
            <h1 className="text-4xl font-bold text-center font-league mb-6 text-white">Our Meals</h1>
            <div className="w-2/3 flex flex-col mx-auto bg-white mb-15">
                <div className="w-full h-2/3"><img src="./assets/images/image-4.jpg" alt="" className="w-full h-full object-contain" /></div>
                <div className="p-3">
                    <h1 className="text-lg font-bold mb-3">Chicken & Fries</h1>
                    <p className="font-league">We provide unmatched quality, comfort, and style
                    for property owners across the country. Our experts
                    combine form and function in bringing your vision to
                    life.</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold"><span className="text-sm">$</span>79.99</p>
                        <div className="space-x-5">
                            <i class="fa-solid fa-heart cursor-pointer"></i>
                            <i class="fa-solid fa-cart-plus cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}