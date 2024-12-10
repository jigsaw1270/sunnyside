
import './App.css'
import downarrow from './assets/images/icon-arrow-down.svg'
import transform from './assets/images/desktop/image-transform.jpg'
import stand from './assets/images/desktop/image-stand-out.jpg'

function App() {


  return (
  <main>
    <section className="bg-[url('/src/assets/images/desktop/image-header.jpg')] h-screen bg-no-repeat bg-center">
      <nav className='flex items-center justify-between container mx-auto pt-6'>
        <h1 className='font-barlow font-extrabold text-white text-4xl'>
          sunnyside
        </h1>
        <ul className='flex gap-x-8 font-barlow text-white items-baseline'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li><button className='font-fraunces p-4 rounded-full bg-white text-black font-bold'>CONTACT</button></li>
        </ul>
      </nav>
      <div className='flex flex-col items-center justify-center'>
          <h1 className='text-white text-8xl font-fraunces font-bold uppercase tracking-widest mt-[8rem]'>we are creatives</h1>
          <img src={downarrow} alt="downarrow" className='mt-40 h-44'/>
        </div>

    </section>

    <section className='flex items-center justify-between bg-[var(--white)]'>
      <div className='mx-auto'>
        <h1 className='font-fraunces text-5xl font-extrabold my-8'>
          Transform your <br /> brand
        </h1>
        <p className='font-barlow text-[var(--dark-blue-300)] tracking-wider leading-relaxed'>
          We are full-service creative agency specializing in <br /> helping brands  grow fast.Engage your clients through <br /> compelling visuals that do most of the  marketing for you
        </p>
        <h2 className='text-black font-bold font-fraunces uppercase my-8 underline decoration-yellow-200 decoration-[10px] underline-offset-0'>Learn more</h2>
      </div>
      <img src={transform} alt="transform" className='w-[50vw]' />
    </section>


    <section className='flex flex-row-reverse items-center justify-between bg-[var(--white)]'>
      <div className='mx-auto'>
        <h1 className='font-fraunces text-5xl font-extrabold my-8'>
          Stand out to the right <br /> audience
        </h1>
        <p className='font-barlow text-[var(--dark-blue-300)] tracking-wider leading-relaxed'>
         using a collaborative formula of designers, researchers, <br /> photographers, videographers, and copywriters , we'll <br /> build and  extend your brand in digital places
        </p>
        <h2 className='text-black font-bold font-fraunces uppercase my-8 underline decoration-red-200 decoration-[10px] underline-offset-0'>Learn more</h2>
      </div>
      <img src={stand} alt="transform" className='w-[50vw]' />
    </section>

    <section className='flex'>
      <div className="bg-[url('/src/assets/images/desktop/image-graphic-design.jpg')] h-[80vh] bg-center bg-no-repeat bg-cover w-[50vw]"></div>
      <div  className="bg-[url('/src/assets/images/desktop/image-photography.jpg')] h-[80vh] bg-center bg-no-repeat bg-cover w-[50vw]"></div>
    </section>
  </main>
  )
}

export default App
