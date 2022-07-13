function Navbar(){
    return(
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-gray-400">Perusahaan &gt;</span>
            <span> Mitramas Infosys Global</span>
          </div>
          <div className="flex">
            <div className="flex items-center w-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div className="flex items-center ml-7">
              <img className="rounded-full w-8 h-8 object-cover" src="./img/ava.jpg" alt="" />
              <span className="ml-4">John doe</span>
            </div>
          </div>
        </div>
    )
}

export default Navbar