// app/layout.js
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header className="bg-blue-500 text-white p-4">
                    <nav className="flex justify-between">
                        <a href="/" className="font-bold">My Website</a>
                        <div>
                            <a href="/about" className="mr-4">About</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
                <footer className="bg-blue-500 text-white p-4 text-center">
                    &copy; 2024 My Website
                </footer>
            </body>
        </html>
    );
};

export default Layout;
