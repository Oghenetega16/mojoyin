import { useEffect, useState } from "react"

export default function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        "./assets/images/image-1.jpg",
        "./assets/images/image-2.jpg",
        "./assets/images/image-3.jpg",
        "./assets/images/image-5.jpg",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        }, 4000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="font-league text-white text-center">
            <div className="w-full h-[562px] overflow-hidden">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full cover transition ease-in-out" />
            </div>
            <div className="my-5 p-5">
                <h1 className="text-4xl font-bold mb-2">Discover innovative ways to decorate</h1>
                <p className="">We provide unmatched quality, comfort, and style
                for property owners across the country. Our experts
                combine form and function in bringing your vision to
                life. Create a room in your own style with our collection
                and make your property a reflection of you and what you love.</p>
                <button className="m-8 px-8 py-4 bg-neutral uppercase font-semibold">Shop Now</button>
            </div>
        </section>
    )
}