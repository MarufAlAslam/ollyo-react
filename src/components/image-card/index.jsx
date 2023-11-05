import React from 'react'

const ImageCard = ({ imgData, index, handleCheck }) => {
    return (
        <div onClick={() => handleCheck(imgData.id)} className={`img-card overflow-hidden cursor-pointer ${imgData.isMarked && "opacity-50"} ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} border rounded-md relative`}>
            <div className={`overlay bg-black absolute top-0 left-0 z-10 w-full h-full opacity-0 ${!imgData.isMarked && "hover:opacity-50"} transition-all duration-[0.6]`}></div>
            <input type="checkbox" checked={imgData.isMarked} onChange={
                () => handleCheck(imgData.id)
            } className='w-[20px] h-[20px] absolute top-[10px] left-[10px] z-20' name="" id="" />
            <img src={imgData.image} alt="" className="w-full rounded-md" />
        </div>
    )
}

export default ImageCard