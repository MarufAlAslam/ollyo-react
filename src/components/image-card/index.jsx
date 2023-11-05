import React from 'react'

const ImageCard = ({ imgData, index }) => {
    return (
        <div className={`${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} border rounded-md`}>
            <img src={imgData.image} alt="" className="w-full rounded-md" />
        </div>
    )
}

export default ImageCard