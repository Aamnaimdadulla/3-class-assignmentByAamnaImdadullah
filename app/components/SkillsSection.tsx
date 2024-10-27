import React from 'react'

export const SkillsSection = () => {
  return (
    
    <section className="text-black text-center">
        
        <main className="flex min-h-screen flex-col bg-pink-200 justify-center">
        {/* <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'> */}
            <div id='skills' className='py-10'>
            <h2 className="text-center text-5xl font-bold text-purple-950  mt-12">My Skills</h2>
            
            <p className=" text-black-200 text-4xl text-center mt-6 ">  <strong>I am Developer,I creating simple and effective web applications, I enjoy working on projects that challenge me to grow as a developer.</strong>
            </p>
            </div>
            



            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl text-pink-900 '>
                    <div className='space-y-2'>
                        <h2><span className="font-bold">Html & Css </span></h2>
                        <h2> <span className="font-bold">TypeScriptspan</span></h2>
                        <h2><span className="font-bold">Next.js</span></h2>
                    </div>
                    <div className='space-y-2'>
                        <h2><span className="font-bold">Tailwind</span></h2>
                        <h2><span className="font-bold">React.js</span></h2>
                        <h2><span className="font-bold">Node.js</span></h2>
                    </div>
                </div>
            </div>
      {/* </div> */}
   </main>
    </section>
    
    
  )
}

