/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemType";

const ImageCard = ({ id, imgData, index, handleCheck, moveCard }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      onClick={() => handleCheck(imgData.id)}
      className={`img-card overflow-hidden cursor-pointer ${
        imgData.isMarked && "opacity-50"
      } ${
        index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      } border rounded-md relative`}
    >
      <div
        className={`overlay bg-black absolute top-0 left-0 z-10 w-full h-full opacity-0 ${
          !imgData.isMarked && "hover:opacity-50"
        } transition-all duration-[0.6]`}
      ></div>
      <input
        type="checkbox"
        checked={imgData.isMarked}
        onChange={(e) => {}}
        className="w-[20px] h-[20px] absolute top-[10px] left-[10px] z-20"
        name=""
        id=""
      />
      <img src={imgData.image} alt="" className="w-full rounded-md" />
    </div>
  );
};

export default ImageCard;
