/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function CardProfile() {
  return (
    <div className="box row-span-3 col-start-1 col-end-3 bg-white shadow-md">
        <div class="h-36 overflow-hidden">
          <img class="w-full rounded-t"
            src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Photo by aldi sigun on Unsplash" />
        </div>
        <div class="flex justify-center px-5 -mt-20  mb-5">
          <span clspanss="block relative h-32 w-32">
            <img alt="Photo by aldi sigun on Unsplash"
              src="https://media-exp2.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=2147483647&v=beta&t=GOBz8mAEorHJIcDqXVU1hYaBBu7HacN9ENSECo3TBWE"
              class="mx-auto object-cover rounded-full h-40 w-40 bg-green-100 p-1" />
          </span>
        </div>


        <div className='p-4'>

          <div className='text-center'>
            <p className='font-bold text-lg'>Mitramas Infosys Global</p>
            <p className='text-sm text-gray-500'>Layanan IT</p>
            <div className='flex items-center justify-center my-8'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <p className='text-green-700 text-sm ml-2'>
                Sunting Profil
              </p>
            </div>
          </div> 

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Status Perusahaan</p>
            <div className='flex justify-between'>
              <p className='text-green-700 font-bold'>Aktif</p>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Singkatan</p>
            <p>MIG</p>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Alamamat Perusahaan</p>
            <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Penanggung Jawab (PIC)</p>
            <p>John Doe</p>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Tanggal PKP</p>
            <p>03 Maret 2021</p>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>E-mail</p>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className='text-green-700 ml-1 underline'>
                mig@mitrasolusi@group.com
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>No. Telp</p>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className='text-green-700 ml-1'>
                021-5678-1234
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <p className='text-gray-500 text-sm mb-2'>Situs Web</p>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className='text-green-700 ml-1 underline'>
                mitramas.com
              </p>
            </div>
          </div>
        </div>
        
      
    </div>
  )
}

export default CardProfile