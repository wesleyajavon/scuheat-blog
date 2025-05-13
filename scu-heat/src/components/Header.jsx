export default function Header() {
    return (
        <header className="w-full text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between space-x-10">

                {/* Left side: Logo + SCU Heat */}
                <div className="flex items-center space-x-10">
                    <img src="./images/logo.svg" alt="SCU Heat logo" className="h-12" />
                    <span className="text-xl font-bold tracking-wide">SCU Heat</span>
                </div>

                {/* Right side: Nav + Button */}
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Team</a>
                        <a href="#" className="hover:text-gray-300">Schedule</a>
                        <a href="#" className="hover:text-gray-300">Gallery</a>
                    </nav>

                    <button className="hidden md:block bg-yellow-400 text-white-900 font-semibold px-5 py-2.5 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition">
                        Contact
                    </button>

                </div>
            </div>
        </header>
    );
}
