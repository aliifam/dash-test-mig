function CardLocation() {
  return (
    <div className="box h-auto col-start-3 col-span-4 p-4 shadow-md bg-white">
      <div className="flex justify-between mb-5">
        <span className="font-bold">
          Lokasi
        </span>
        <span className="text-green-600 text-sm">
          Lihat Semua
        </span>
      </div>
      <div className="flex justify-between">
        <div className="bg-green-600 w-1/3 rounded-md mr-2 flex justify-between items-center p-4">
          <div className="fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h1 className="text-right text-white font-bold text-2xl">20</h1>
            <span className="text-gray-300">Induk</span>
          </div>
        </div>
        
        <div className="bg-green-600 w-1/3 rounded-md mr-2 flex justify-between items-center p-4">
          <div className="fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h1 className="text-right text-white font-bold text-2xl">3</h1>
            <span className="text-gray-300">Sub Lokasi Level 1</span>
          </div>
        </div>

        <div className="bg-green-600 w-1/3 rounded-md flex justify-between items-center p-4">
          <div className="fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h1 className="text-right text-white font-bold text-2xl">1</h1>
            <span className="text-gray-300">Sub Lokasi Level 2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLocation