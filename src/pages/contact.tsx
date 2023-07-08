import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

import Container from "../components/Container"
import QuotationForm from "../components/QuotationForm"

const Contact = () => {
  return (
    <Container innerClasses="container flex gap-x-8 md:flex-row flex-col gap-y-8">
      <div className="flex-1">
        <h2 className="mb-16 text-3xl text-neutral-700 font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Send Message Us</h2>
        <QuotationForm/>
      </div>
      <div className="flex-1">
        <h2 className="mb-16 text-3xl text-neutral-700 font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Contact Details</h2>
        <p className="text-neutral-500 mb-8">There are many variations off +1800 854 5864 available, but the majority have ut suffered alterattions in some forms by injected humour looks events slightly seds believable ut seds do eiusmod tempor incididunt labore.</p>
        <div className='flex flex-col gap-y-6'>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiLocationOn/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Address :</h2>
              <p className='text-neutral-500'>21/17, Level 4 Steel Rock St, Melbourne <br /> Victoria 3000, Australia.</p>
            </div>
          </div>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiMail/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Mail To Fernando :</h2>
              <p className='text-neutral-500 break-all'>Decoratorssupport@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiPhone/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Call Him :</h2>
              <p className='text-neutral-500'>+1 (44) 123-45-67, +1(44) 456-78-90</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact