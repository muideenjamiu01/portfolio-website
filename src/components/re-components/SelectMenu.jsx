import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

function SelectMenu() {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        // console.log(data)
      });
  });

  return (
    <>
      <div className="w-72 font-medium h-80 bg-blue-900 mx-auto p-8">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white w-full p-2 flex items-center justify-center rounded ${
            !selected && "text-gray-700"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Country"}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <ul
          className={`bg-white mt-2  overflow-y-auto ${
            open ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <AiOutlineSearch className="text-gray-700" />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              type="text"
              placeholder="Enter country name"
              className="placeholder:text-gray-700 p-2 outline-none"
            />
          </div>
          
          {countries?.map((country) => (
            <li
              key={country.name}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white 
                ${
                  country?.name?.toLowerCase() === selected?.toLowerCase() &&
                  "bg-sky-600 text-white"
                }
                ${
                  country?.name.toLowerCase().startsWith(inputValue)
                    ? "block"
                    : "hidden"
                }  `}
              onClick={() => {
                if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(country?.name);
                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              {" "}
              {country.name}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SelectMenu;
