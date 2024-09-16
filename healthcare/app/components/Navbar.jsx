import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="bg-cyan-900 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="text-white text-2xl font-semibold">
                    FAU Healthcare
                </div>


                <div className="flex space-x-4">
                    <Link
                        href="/book-appointment"
                        className="text-white hover:text-sky-300 transition duration-300"
                    >
                        Book an Appointment
                    </Link>
                    <Link
                        href="/login"
                        className="text-white hover:text-sky-300 transition duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar