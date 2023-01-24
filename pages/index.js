import Head from 'next/head'
import {BsFillMoonStarsFill, BsLinkedin,BsGithub} from 'react-icons/bs';
import Image from 'next/image';
import image from './assets/58-PrinceMangwa.jpg';




export function Home() {
  return (
    <div>
      <Head>
        <title>Prince Mangwa Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg white px-10'>
        <section className= "bg-white-700 h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>DevelopedByPK</h1>
              <ul className='flex items-center'>
                <li>
                  
                  <BsFillMoonStarsFill/>
                </li>
                <li>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1W0bKNXEvSReO-G0tJWUlbD8tzFYxb55M/view?usp=share_link" locale = {false}target= "_blank">
                  
                    Resume

                  </a>

                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium'>Prince Mangwa</h2>
              <h3 className='text-2xl py-2'>Software Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800'>Software engineering student with WeThinkCode_
                proficient in java, python, HTML,CSS, ThymeLeaf,React-Redux,SQL
                Software Testing just to name a few!
                
              </p>
            </div>

            <div 
              className='text-5xl flex justify-center gap-5' href="#">
              <a href='https://www.linkedin.com/in/prince-mangwa-5a928174/'><BsLinkedin/></a>
            
          
              <a href='https://github.com/KgaogeloMangwa?tab=repositories'><BsGithub/></a>
              
            </div>

            <div className='relative mx-auto bg-gradiet-to-b from-teal-500 rounded-full w-80 h-80 mt-20'>
              <Image src={image}  alt="MyPicture"/>

              <h3 className='text-2xl py-2'>Why i became a software developer/engineer</h3>
              <p className='text-md py-5 leading-8 text-gray-800'> Through out my life and to this day i have always been 
              fascinated by technology and its functionality like how i would set an alarm on my cellphone and that alarm 
              would play music that i downloaded the most interesting one was when i would set the alarm then turn the phone off then moments before the alarm goes off
              the phone would turn itself on ..as my curiousity and fascination continued to grow i looked at the world around me an how everything 
              was happening at a touch of a button from gates opening and closing and cars parking themselves to the basic things like sending a text..Through WeThinkCode_ i am satisfying my curiousity.
              </p>

            </div>

        </section>

      </main>
    </div>
  )
}

export default Home;