import React from 'react'

const ImageCard = ({ imgData, index, handleCheck }) => {
    return (
        <div onClick={()=>handleCheck(imgData.id)} className={`cursor-pointer ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} border rounded-md relative`}>
            <input type="checkbox" checked={imgData.isMarked} className='w-[20px] h-[20px] absolute top-[10px] left-[10px]' name="" id="" />
            <img src={imgData.image} alt="" className="w-full rounded-md" />
        </div>
    )
}

export default ImageCard