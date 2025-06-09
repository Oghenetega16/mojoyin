import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

export default function ProductCard() {
    const products = [
        {
            id: 1,
            name: 'Chicken & Fries',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
            desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.'
        },
        {
            id: 2,
            name: 'Beef Burger Deluxe',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
            desc: 'Premium beef burger with fresh ingredients and our signature sauce. A perfect combination of taste and quality that will satisfy your cravings.'
        },
        {
            id: 3,
            name: 'Grilled Salmon',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
            desc: 'Fresh Atlantic salmon grilled to perfection with herbs and spices. Served with seasonal vegetables and our special lemon butter sauce.'
        },
        {
            id: 4,
            name: 'Pasta Carbonara',
            price: 65.99,
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d240?w=400&h=300&fit=crop',
            desc: 'Authentic Italian pasta with creamy sauce, pancetta, and parmesan cheese. Made with traditional recipes passed down through generations.'
        },
        {
            id: 5,
            name: 'Vegetarian Pizza',
            price: 55.99,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
            desc: 'Wood-fired pizza topped with fresh vegetables, mozzarella cheese, and aromatic herbs. Perfect for vegetarians and pizza lovers alike.'
        },
        {
            id: 6,
            name: 'Caesar Salad',
            price: 45.99,
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
            desc: 'Fresh romaine lettuce with caesar dressing, croutons, and parmesan cheese. Light yet satisfying meal option for health-conscious diners.'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [favorites, setFavorites] = useState(new Set())

    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isPlaying, products.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    const toggleFavorite = (productId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev)
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId)
            } else {
                newFavorites.add(productId)
            }
            return newFavorites
        })
    }

    const getPrevIndex = () => (currentSlide - 1 + products.length) % products.length
    const getNextIndex = () => (currentSlide + 1) % products.length

    return (
        <div className=" bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Meals</h1>
                
                <div className="relative h-[500px] perspective-1000">
                    {products.map((product, index) => {
                        const isActive = index === currentSlide
                        const isPrev = index === getPrevIndex()
                        const isNext = index === getNextIndex()
                        
                        let transformClasses = ''
                        let opacityClasses = ''
                        let zIndexClasses = ''
                        
                        if (isActive) {
                            transformClasses = 'scale-100 translate-x-0 rotate-0'
                            opacityClasses = 'opacity-100'
                            zIndexClasses = 'z-30'
                        } else if (isPrev) {
                            transformClasses = 'scale-90 -translate-x-8 -rotate-3'
                            opacityClasses = 'opacity-40'
                            zIndexClasses = 'z-20'
                        } else if (isNext) {
                            transformClasses = 'scale-90 translate-x-8 rotate-3'
                            opacityClasses = 'opacity-40'
                            zIndexClasses = 'z-20'
                        } else {
                            transformClasses = 'scale-75 translate-x-0'
                            opacityClasses = 'opacity-0'
                            zIndexClasses = 'z-10'
                        }

                        return (
                            <div
                                key={product.id}
                                className={`absolute inset-0 transition-all duration-700 ease-out transform ${transformClasses} ${opacityClasses} ${zIndexClasses}`}
                            >
                                <div className="mx-auto w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                                    <div className="w-full h-48 overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-3 text-gray-800">{product.name}</h2>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                                            {product.desc}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-2xl font-bold text-neutral">
                                                <span className="text-lg">$</span>{product.price}
                                            </p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => toggleFavorite(product.id)}
                                                    className="transition-colors duration-200 hover:scale-110 transform"
                                                >
                                                    <Heart 
                                                        className={`w-6 h-6 cursor-pointer ${
                                                            favorites.has(product.id) 
                                                                ? 'fill-red-500 text-red-500' 
                                                                : 'text-gray-400 hover:text-red-500'
                                                        }`} 
                                                    />
                                                </button>
                                                <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
                                                    <ShoppingCart className="w-6 h-6 cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* Indicators */}
                    <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Nothing was done today