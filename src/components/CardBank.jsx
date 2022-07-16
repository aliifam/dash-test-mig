function CardBank() {
  return (
    <div className="box col-start-3 col-end-5 bg-white p-4 shadow-md ">
      <div className="flex justify-between mb-6">
        <div className="text-md font-bold">
          Akun Bank
        </div>
        <div className="bg-green-600 text-white py-1 px-3 rounded text-sm">
          + Tambah Akun Bank
        </div>
      </div>
      <div className="flex mb-4">
        <img className="w-40 h-auto" src="https://pngimg.com/uploads/credit_card/credit_card_PNG128.png" alt="" />
        <div className="flex flex-col justify-between ml-4">
          <div className="font-bold text-md">Bank KB Bukopin</div>
          <div className="text-sm text-gray-500">
            <p>*****0876 - Yusron Taufiq</p>
            <p>IDR</p>
          </div>
        </div>
        <div className="flex ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FF0000" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>

      <div className="flex">
        <img className="w-40 h-auto" src="https://pngimg.com/uploads/credit_card/credit_card_PNG128.png" alt="" />
        <div className="flex flex-col justify-between ml-4">
          <div className="font-bold text-md">Bank KB Bukopin</div>
          <div className="text-sm text-gray-500">
            <p>*****0876 - Yusron Taufiq</p>
            <p>IDR</p>
          </div>
        </div>
        <div className="flex ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FF0000" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CardBank