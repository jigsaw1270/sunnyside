
import './App.css'
import downarrow from './assets/images/icon-arrow-down.svg'
import transform from './assets/images/desktop/image-transform.jpg'
import stand from './assets/images/desktop/image-stand-out.jpg'
import emily from './assets/images/image-emily.jpg'
import jennie from './assets/images/image-jennie.jpg'
import thomas from './assets/images/image-thomas.jpg'
import bottles from './assets/images/desktop/image-gallery-milkbottles.jpg'
import cone from './assets/images/desktop/image-gallery-cone.jpg'
import orange from './assets/images/desktop/image-gallery-orange.jpg'
import sugercube from './assets/images/desktop/image-gallery-sugarcubes.jpg'
import facebook from './assets/images/icon-facebook.svg'
import twitter from './assets/images/icon-twitter.svg'
import instagram from './assets/images/icon-instagram.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  const lenis = useLenis(({ scroll }) => {
  });

function removeBrTagsOnMobile() {
  if (window.innerWidth <= 768) {
    const brTags = document.querySelectorAll('br');
    brTags.forEach(br => br.remove());
  }
}

document.addEventListener('DOMContentLoaded', removeBrTagsOnMobile);
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    removeBrTagsOnMobile();
  }
});
  



  return (
 <ReactLenis root options={{
  duration: 1.2, // Slower animation
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smooth: true,
  wheelMultiplier: 1.2, // Adjust scroll sensitivity
}}>
   <main>
    <section className="bg-[url('/src/assets/images/desktop/image-header.jpg')] md:h-screen  bg-no-repeat bg-center md:px-0 px-4 bg-cover">
      <nav className='flex items-center justify-between container mx-auto pt-6'>
        <h1 className='font-barlow font-extrabold text-white text-4xl'>
          sunnyside
        </h1>
        <ul className='gap-x-8 font-barlow text-white items-baseline hidden md:flex'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li><button className='font-fraunces p-4 rounded-full bg-white text-black font-bold'>CONTACT</button></li>
        </ul>
       <button className='block md:hidden'> <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg></button>
      </nav>
      <div className='flex flex-col items-center justify-between md:gap-y-28 gap-y-8 md:pb-0 pb-16'>
          <h1 className='text-white md:text-7xl text-5xl max-sm:text-center font-fraunces font-bold uppercase tracking-widest mt-[8rem]'>we are creatives</h1>
          <img src={downarrow} alt="downarrow"/>
        </div>

    </section>

    <section className='flex md:flex-row  flex-col-reverse items-center justify-between bg-[#fffbf8]'>
      <div className='mx-auto  max-sm:text-center'>
        <h1 className='font-fraunces text-5xl font-extrabold my-8'>
          Transform your <br /> brand
        </h1>
        <p className='font-barlow text-[var(--dark-blue-300)] tracking-wider leading-relaxed'>
          We are full-service creative agency specializing in <br /> helping brands  grow fast.Engage your clients through <br /> compelling visuals that do most of the  marketing for you
        </p>
        <h2 className='text-black font-bold font-fraunces uppercase my-8 underline decoration-yellow-200 decoration-[10px] underline-offset-0'>Learn more</h2>
      </div>
      <img src={transform} alt="transform" className='md:w-[50vw]' />
    </section>


    <section className='flex  flex-col-reverse  md:flex-row-reverse items-center justify-between bg-[#fffbf8]'>
      <div className='mx-auto  max-sm:text-center'>
        <h1 className='font-fraunces text-5xl font-extrabold my-8'>
          Stand out to the right <br /> audience
        </h1>
        <p className='font-barlow text-[var(--dark-blue-300)] tracking-wider leading-relaxed'>
         using a collaborative formula of designers, researchers, <br /> photographers, videographers, and copywriters , we'll <br /> build and  extend your brand in digital places
        </p>
        <h2 className='text-black font-bold font-fraunces uppercase my-8 underline decoration-red-200 decoration-[10px] underline-offset-0'>Learn more</h2>
      </div>
      <img src={stand} alt="transform" className='md:w-[50vw]' />
    </section>

    <section className='flex md:flex-row flex-col'>
      <div className="bg-[url('/src/assets/images/desktop/image-graphic-design.jpg')] h-[80vh] bg-center bg-no-repeat bg-cover md:w-[50vw] relative">
    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-[var(--graphic-text)]'>
    <h1 className='text-4xl font-fraunces font-bold mb-8'>Graphics design</h1>
    <p className='font-semibold'>Great design makes your memorable. We deliver <br /> artwork that underscores your brand message <br /> and captures potential client's attention. </p>
    </div>
      </div>
      <div  className="bg-[url('/src/assets/images/desktop/image-photography.jpg')] h-[80vh] bg-center bg-no-repeat bg-cover md:w-[50vw] relative">
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-[var(--photography-text)]'>
      <h1 className='text-4xl font-fraunces font-bold mb-8'>Photography</h1>
      <p className='font-semibold'>Increase credibility by getting the most <br /> stunning , high-quality photos that  improve your <br /> business image</p>
      </div>
      </div>
    </section>
    <section className='bg-[#fffbf8]'>
      <div className='container py-36 mx-auto'>
        <h1 className='text-center font-fraunces text-xl uppercase font-bold text-gray-400 tracking-widest py-6'> Client testimonial</h1>
        <div className='flex md:flex-row flex-col items-center justify-center gap-x-[10rem] mt-12'>
          <div className='text-center flex flex-col items-center text-lg'>
            <img src={emily} alt="" className='rounded-full size-[5rem] my-6 ' />
            <p className='font-barlow text-[var(--dark-blue-300)] my-8'>We put trust in Sunnyside and they <br /> delivered,making sure our needs were met <br /> and deadlines were always hit</p>
            <h2 className='font-fraunces font-bold pt-6'>Emily R.</h2>
            <p className='text-sm font-barlow text-[var(--grayish-blue)] my-4'>Marketing Director</p>
          </div>
          <div className='text-center flex flex-col items-center text-lg'>
            <img src={thomas} alt="" className='rounded-full size-[5rem] my-6 ' />
            <p className='font-barlow text-[var(--dark-blue-300)] my-8'>We put trust in Sunnyside and they <br /> delivered,making sure our needs were met <br /> and deadlines were always hit</p>
            <h2 className='font-fraunces font-bold pt-6'>Thomas s.</h2>
            <p className='text-sm font-barlow text-[var(--grayish-blue)] my-4'>Chief operationg officer</p>
          </div>
          <div className='text-center flex flex-col items-center text-lg'>
            <img src={jennie} alt="" className='rounded-full size-[5rem] my-6 ' />
            <p className='font-barlow text-[var(--dark-blue-300)] my-8'>We put trust in Sunnyside and they <br /> delivered,making sure our needs were met <br /> and deadlines were always hit</p>
            <h2 className='font-fraunces font-bold pt-6'>Jennie D.</h2>
            <p className='text-sm font-barlow text-[var(--grayish-blue)] my-4'>Business Owner</p>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div className='grid md:grid-cols-4 grid-cols-2 '>
        <img src={bottles} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugercube} alt="" />
      </div>
    </section>

    <footer className='bg-[var(--footer-bg)]'>
      <div className='container mx-auto text-center py-16'>
      <h1 className='font-barlow font-extrabold text-[var(--footer-text)] text-4xl'>
          sunnyside
        </h1>
        <ul className='flex justify-center items-center text-[var(--footer-text)] gap-x-6 text-lg font-semibold mt-6'>
          <li>About</li>
          <li>Services</li> 
          <li>Projects</li>
        </ul>

        <ul  className='flex justify-center items-center text-[var(--footer-text)] gap-x-6 text-lg font-semibold mt-24'>
          <li><img src={facebook} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
          <li><img src={pinterest} alt="" /></li>
        </ul>

      </div>
      <div className='bg-emerald-600 text-white font-fraunces text-xs text-center'>
      &copy; @jigsaw-dev
      </div>
    </footer>
  </main>
 </ReactLenis>
  )
}

export default App
