import React,{useState} from 'react'

function Sidebar() {
    const [open, setOpen] = useState(true)
    const Menus = [
        {title: "Dashboard", src: "jjj"},
        {title: "Accounts", src: "jjj"},
        {title: "Analytics", src: "jjj"},
        {title: "Setting", src: "jjj"},
    ]
  return (
    <div className='flex'>
        <div className={` ${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-blue-500 relative`}>
          <img  src='./src/assets/profile-img.jpg' className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-blue-700 ${!open && "rotate-180" }`}
          onClick={() => setOpen(!open)} />  
          <div className='flex gap-x-4 items-center'>
            <img src="" alt="logo" className={`cursor-pointer duration-500`} />
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Developer</h1>
          </div>
          <ul className='pt-6'>
            {Menus.map((menu, index) => (
               <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md `}>
                <img src="" alt="" />
                 <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
               </li>
            ))}
          </ul>
        </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Sidebar
