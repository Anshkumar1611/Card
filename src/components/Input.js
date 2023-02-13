import React from 'react'

const input = ({ placeholder, value }) => {
    return (
        <input type="number" placeholder={placeholder} className="input w-full max-w-xs text-black" />
    )
}

export default input