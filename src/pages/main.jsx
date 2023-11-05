/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import update from 'immutability-helper'

// import icons
import { BiImageAdd } from "react-icons/bi"
import { FaCheckSquare } from "react-icons/fa"

// import images
import img1 from "../assets/images/image-1.webp"
import img2 from "../assets/images/image-2.webp"
import img3 from "../assets/images/image-3.webp"
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
    // default image data
    const data = [
        {
            id: 1,
            image: img1,
            isMarked: false
        },
        {
            id: 2,
            image: img2,
            isMarked: false
        },
        {
            id: 3,
            image: img3,
            isMarked: false
        },
        {
            id: 4,
            image: img4,
            isMarked: false
        },
        {
            id: 5,
            image: img5,
            isMarked: false
        },
        {
            id: 6,
            image: img6,
            isMarked: false
        },
        {
            id: 7,
            image: img7,
            isMarked: false
        },
        {
            id: 8,
            image: img8,
            isMarked: false
        },
        {
            id: 9,
            image: img9,
            isMarked: false
        },
        {
            id: 10,
            image: img10,
            isMarked: false
        },
        {
            id: 11,
            image: img11,
            isMarked: false
        },
    ]

    // states
    const [images, setImages] = useState(data)
    const [countSelected, setCountSelected] = useState(0)

    // set image data
    useEffect(() => {
        setImages(data)
    }, [])

    useEffect(() => {
        setCountSelected(images.filter(item => item.isMarked === true).length)
    }
        , [images])


    // check uncheck funtion
    const handleCheck = (id) => {
        const newData = images.map(item => {
            if (item.id === id) {
                item.isMarked = !item.isMarked
            }
            return item
        })
        setImages(newData)
    }

    // delete selected images
    const handleDelete = () => {
        const newData = images.filter(item => item.isMarked === false)
        setImages(newData)
    }

    // move 
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setImages((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [])

    //   render
    const renderCard = useCallback((card, index) => {
        return (
            <ImageCard key={card.id} id={card.id} index={index} imgData={card} handleCheck={handleCheck} moveCard={moveCard} />
        )
    }, [])
    return (
        <main>
            <div className="wrapper bg-gray-50 w-full">
                <div className="grid-container bg-white p-5 rounded-md">
                    <div className="flex justify-between items-center">
                        {
                            countSelected > 0 ? <h1 className="text-xl font-semibold flex items-center gap-2">
                                <FaCheckSquare className='text-blue-600' />
                                {countSelected} Files Selected</h1> : <h1 className="text-xl font-semibold">Gallery</h1>
                        }

                        {
                            countSelected > 0 && <button onClick={handleDelete} className="text-red-500 hover:underline rounded-md">Delete Files</button>
                        }
                    </div>
                    <div className="line w-full h-[1px] bg-gray-200 mt-4"></div>
                    <div className="grid grid-cols-5 gap-4 py-4">
                        {images.map((item, index) => (
                            renderCard(item, index)
                        ))}

                        <input type="file" name="file" id="file" className="hidden" />
                        <label htmlFor="file" className="col-span-1 row-span-1 border rounded-md cursor-pointer min-h-[175px]">
                            <div className="flex flex-col gap-3 justify-center items-center h-full">
                                <BiImageAdd className='text-2xl' />
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