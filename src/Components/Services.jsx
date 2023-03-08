import React from 'react'
import SettingImg from '../assets/images/Settings_Outline.svg';

const Services = () => {
  return (
    <div className='container mx-auto px-10 py-10 grid md:grid-cols-2 justify-items-center'>
        <div className='md:col-span-2 my-4'><h1 className='sm:text-4xl text-3xl text-white font-medium title-font mb-2 border-white border-b-4 pb-6'>My Services</h1></div>
        <div className='md:col-span-2 my-4'>
            <p className='font-medium text-xl mb-4'>
            I am committed to exceeding my clients' expectations by delivering projects that surpass their initial vision. Let me show you how we can work together to achieve success and bring your project to the next level. 
            </p>
        </div>
        <div className='md:col-start-1'>
            <ol>
                <li className='mb-6'><span className='text-white text-lg font-medium'>Consultation</span> - It starts with a conversation where we can meet and discuss project goals.</li>
                <li className='mb-6'><span className='text-white text-lg font-medium'>Proposal</span> - A detailed project proposal that includes a preview and a plan of action.</li>
                <li className='mb-6'><span className='text-white text-lg font-medium'>Creation</span> - Clients will receive regular updates on their project during the development process.</li>
                <li className='mb-6'><span className='text-white text-lg font-medium'>Deployment & Support</span> - Deployment of project and readily available for ongoing support.</li>
            </ol>
        </div>
        <div className='md:col-start-2'>
           <img src={SettingImg} alt='' className='object-fill'/>
        </div>
    </div>
  )
}

export default Services