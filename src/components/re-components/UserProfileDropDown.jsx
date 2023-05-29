import React from "react";
import { useState, useEffect, useRef  } from "react";


const Menus = ["Profile", "settings", "Logout"];
function UserProfileDropDown() {
  const [open, setOpen] = useState(false);

const menuRef = useRef()
const imgRef = useRef()

window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current){
        setOpen(false)
    }

})

  return (
    <>
      <div className="relative">
        <div  className="flex justify-center pt-10">
          <div ref={imgRef} onClick={() => setOpen(!open)} className="h-8 w-8 rounded-full object-cover border-4 bg-blue-600 flex justify-center cursor-pointer">
            h
          </div>
        </div>
        {open && (
          <div ref={menuRef} className="flex justify-center  bg-blue-400 w-52 shadow-lg absolute left-96 rounded p-2">
            <ul className="">
              {Menus.map((menu, i) => (
                <li
                onClick={() => setOpen(!open)}
                  key={i}
                  className="p-2 rounded text-lg cursor-pointer hover:bg-white"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfileDropDown;
