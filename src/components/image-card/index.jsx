import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/itemType'

const ImageCard = ({ id, imgData, index, handleCheck, moveCard }) => {
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item, monitor) {
          if (!ref.current) {
            return
          }
          const dragIndex = item.index
          const hoverIndex = index
          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return
          }
          // Determine rectangle on screen
          const hoverBoundingRect = ref.current?.getBoundingClientRect()
          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          // Determine mouse position
          const clientOffset = monitor.getClientOffset()
          // Get pixels to the top
          const hoverClientY = clientOffset.y - hoverBoundingRect.top
          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%
          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }
          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }
          // Time to actually perform the action
          moveCard(dragIndex, hoverIndex)
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex
        },
      })
      const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })
      const opacity = isDragging ? 0 : 1
      drag(drop(ref))
    return (
        <div ref={ref} style={{ opacity }} data-handler-id={handlerId} onClick={() => handleCheck(imgData.id)} className={`img-card overflow-hidden cursor-pointer ${imgData.isMarked && "opacity-50"} ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} border rounded-md relative`}>
            <div className={`overlay bg-black absolute top-0 left-0 z-10 w-full h-full opacity-0 ${!imgData.isMarked && "hover:opacity-50"} transition-all duration-[0.6]`}></div>
            <input type="checkbox" checked={imgData.isMarked} onChange={
                () => handleCheck(imgData.id)
            } className='w-[20px] h-[20px] absolute top-[10px] left-[10px] z-20' name="" id="" />
            <img src={imgData.image} alt="" className="w-full rounded-md" />
        </div>
    )
}

export default ImageCard