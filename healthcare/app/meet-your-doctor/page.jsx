import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <section className='flex flex-col items-center'>
                <h1 className="text-3xl font-bold text-cyan-700 mb-4">
                    Meet Owlsley, Your FAU Healthcare Expert
                </h1>
                <Image src='/owlsley.jpg' width='500' height='500' />


                <div className="p-5">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Owlsley is not just the beloved FAU mascot but also a symbol of the caring and dedicated spirit we bring to your healthcare journey. With a unique blend of enthusiasm and commitment, Owlsley is here to ensure you receive the best care and support.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        As part of our team, Owlsley brings a friendly and approachable presence to FAU Healthcare, making your visits both comfortable and enjoyable. Whether you’re here for a routine check-up or more specialized care, you can count on Owlsley to be a reassuring and guiding force.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Ready to start your journey with us? Book an appointment today and experience the unique blend of expert care and the warm, welcoming spirit of Owlsley.
                    </p>
                </div>

                <button
                    type="button"
                    className="mt-8 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
                >
                    Book an Appointment
                </button>

            </section>

        </>
    )
}

export default page