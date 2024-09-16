

import Link from "next/link";
export default function Home() {
  return (
    <>

      <section className="bg-cyan-700 py-24 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold text-center leading-tight">
            Empowering your health journey with FAU's trusted care, where innovation meets compassionate healthcare.
          </h1>

          <p className="text-lg md:text-xl text-center mt-5 leading-relaxed">
            Personalized care and advanced medical expertise dedicated to your well-being.
          </p>

          <Link href='/appointments'>
            <button
              type="button"
              className="mt-8 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
            >
              Book an Appointment
            </button>
          </Link>

        </div>
      </section>


      <section className="bg-slate-100 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At FAU Healthcare, we are committed to delivering innovative, compassionate care backed by the expertise of Florida Atlantic University’s esteemed medical professionals. Our approach integrates cutting-edge research, advanced treatments, and a dedication to the well-being of our patients and community.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With a focus on education, research, and patient-centered care, we offer comprehensive healthcare solutions that cater to your unique needs. Whether you’re seeking routine medical attention or advanced specialty care, FAU Healthcare is here to guide you on your health journey with the highest standards of excellence.
          </p>
        </div>
      </section>



      <section className="bg-slate-100 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Here's how it works</h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1  px-5 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-4 text-3xl text-blue-600">
              📅
            </div>
            <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
            <p className="text-gray-600">Easily schedule an appointment with our FAU healthcare expert through our online portal.</p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-4 text-3xl text-blue-600">
              👩‍⚕️
            </div>
            <h3 className="text-xl font-semibold mb-4">Consult with Our Expert</h3>
            <p className="text-gray-600">Meet with our board-certified physician to create a personalized care plan that meets your health needs.</p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-4 text-3xl text-blue-600">
              🏥
            </div>
            <h3 className="text-xl font-semibold mb-4">Receive Comprehensive Care</h3>
            <p className="text-gray-600">Access state-of-the-art treatments and care from our dedicated medical professional.</p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-4 text-3xl text-blue-600">
              🔄
            </div>
            <h3 className="text-xl font-semibold mb-4">Follow-Up and Support</h3>
            <p className="text-gray-600">Receive ongoing support and follow-up care to help you maintain and achieve your health goals.</p>
          </div>
        </div>
      </section>

    </>
  );
}
