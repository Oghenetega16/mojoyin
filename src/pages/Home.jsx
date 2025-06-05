import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

export default function Home() {
    return (
        <main className="grid min-h-screen font-display bg-special relative">
            <Navbar />
            <HeroBanner />
            <ProductCard />
            <Footer />
        </main>
    )
}