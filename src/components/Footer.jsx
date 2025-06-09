export default function Footer() {

    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-special p-7">
            <div>
                <p className="text-lg text-white">LOGO</p>
            </div>
            <section className="text-white grid grid-cols-2 space-y-8 mt-10">
                <div>
                    <h1 className="font-league">ABOUT US</h1>
                    <ul className="text-sm">
                        <li>Map</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Log In</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-league">CUSTOMER</h1>
                    <ul className="text-sm">
                        <li>Shopping</li>
                        <li>Returns</li>
                        <li>Privacy & Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-league">ACCOUNT</h1>
                    <ul className="text-sm">
                        <li>Sign In</li>
                        <li>Cart</li>
                        <li>Lock My Account</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-league">HELP</h1>
                    <ul className="text-sm">
                        <li>FAQ</li>
                        <li>My Orders</li>
                        <li>Delivery Terms</li>
                    </ul>
                </div>
            </section>

            <p className="text-sm text-center text-white font-league">&copy; {currentYear} Logo Name. All rights reserved.</p>
        </footer>
    )
}