import React from 'react'
import { Container } from '../../layout/ui/Container'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <Container className='my-section p-5 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 border-b border-gray-500 py-5'>
        <Image className='col-span-1' src='/footer-logo.svg' alt='logo' width={100} height={100} />
        <div className='col-span-2 flex justify-between'>
            <div className='flex gap-10 w-full'>
            <a href='/' className='text-gray-400 hover:text-white transition-all'>Home</a>
            <a href='/' className='text-gray-400 hover:text-white transition-all'>Services</a>
            <a href='/' className='text-gray-400 hover:text-white transition-all'>Work</a>
            <a href='/' className='text-gray-400 hover:text-white transition-all'>About</a>
            <a href='/' className='text-gray-400 hover:text-white transition-all'>Contact</a>
            </div>

            <div className='flex gap-5'>
            <a>
                <Image src='/facebook.svg' alt='facebook' width={20} height={20} />
            </a>
            <a>
                <Image src='/twitter.svg' alt='twitter' width={20} height={20} />
            </a>  
            <a>
                <Image src='/linkedin.svg' alt='instagram' width={20} height={20} />
            </a>
            </div>
        </div>
      </div>

      <div className='flex justify-between py-5'>
        <div className='flex gap-5 items-center'>
            <div className='flex items-center gap-2'>
                <Image src='/mail.svg' alt='logo' width={20} height={20} />
                <span>hello@aviren.com</span>
            </div>

            <div className='flex items-center gap-2'>
                <Image src='/call.svg' alt='logo' width={20} height={20} />
                <span>+123 45687890</span>
            </div>
        </div>
        <div>
        © 2025 Aviren Studio. All rights reserved.
        </div>
      </div>
    </Container>
  )
}

export default FooterSection
