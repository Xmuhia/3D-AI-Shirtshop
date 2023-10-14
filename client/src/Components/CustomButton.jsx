 import React from 'react'

const CustomButton = () => {
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generate(type)}
    >
    </button>
  )
}

export default CustomButton;
