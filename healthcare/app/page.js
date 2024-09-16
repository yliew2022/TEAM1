import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className='  bg-cyan-900 p-24'>
        <div className='flex flex-col items-center text-white'>
          <p className='text-2xl text-center'>
            Empowering your health journey with FAU's trusted care, where innovation meets compassionate healthcare.
          </p>

          <p className='text-lg text-center mt-5'>Personalized care and advanced medical expertise dedicated to your well-being.</p>

          <button type="button" class="text-white w-min mt-5 bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Book an Appointment</button>
        </div>

      </section>
    </>
  );
}
