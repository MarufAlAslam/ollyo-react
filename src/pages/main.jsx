import React from 'react'

// import icons
import {BiImageAdd} from "react-icons/bi"

// import images
import img1 from "../assets/images/image-1.webp"
import img2 from "../assets/images/image-2.webp"
import img3 from "../assets/images/image-2.webp"
import img4 from "../assets/images/image-4.webp"
import img5 from "../assets/images/image-5.webp"
import img6 from "../assets/images/image-6.webp"
import img7 from "../assets/images/image-7.webp"
import img8 from "../assets/images/image-8.webp"
import img9 from "../assets/images/image-9.webp"
import img10 from "../assets/images/image-10.jpeg"
import img11 from "../assets/images/image-11.jpeg"
import ImageCard from '../components/image-card'

const Main = () => {
    const data = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
        {
            id: 7,
            image: img7
        },
        {
            id: 8,
            image: img8
        },
        {
            id: 9,
            image: img9
        },
        {
            id: 10,
            image: img10
        },
        {
            id: 11,
            image: img11
        },
    ]
    return (
        <main>
            <div className="wrapper bg-gray-50 w-full">
                <div className="grid-container bg-white p-5 rounded-md">
                    <div className="grid grid-cols-5 gap-4 p-8">
                        {data.map((item, index) => (
                            <ImageCard key={index} index={index} imgData={item} />
                        ))}

                        <input type="file" name="file" id="file" className="hidden" />
                        <label htmlFor="file" className="col-span-1 row-span-1 border rounded-md cursor-pointer">
                            <div className="flex flex-col gap-3 justify-center items-center h-full">
                                <BiImageAdd className='text-2xl'/>
                                <span>Add Images</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main