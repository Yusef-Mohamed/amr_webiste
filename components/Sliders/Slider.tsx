"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

interface ISliderProps {
  children: React.ReactNode;
  slidesCount: number;
  withArrow: boolean;
  withDots: boolean;
  autoScrollInSec?: number;
}

type SetCurrentIndexType = (
  value: number | ((prevIndex: number) => number)
) => void;

const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
  duration: 5000,
};

const Slider = ({
  children,
  slidesCount,
  withArrow,
  withDots,
  autoScrollInSec,
}: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dragX = useMotionValue(0);
  useEffect(() => {
    if (autoScrollInSec) {
      const intervalRef = setInterval(() => {
        const x = dragX.get();

        if (x === 0) {
          setCurrentIndex((pv) => {
            if (pv === slidesCount - 1) {
              return 0;
            }
            return pv + 1;
          });
        }
      }, 1000 * autoScrollInSec);

      return () => clearInterval(intervalRef);
    }
  }, [autoScrollInSec, dragX, slidesCount]);
  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      if (currentIndex === slidesCount - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((pv) => pv + 1);
      }
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };
  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
          translateX: `-${currentIndex * 100}vw`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab slider items-center active:cursor-grabbing"
      >
        {children}
      </motion.div>
      {withArrow && (
        <GradientEdges
          setCurrentIndex={setCurrentIndex}
          slidesCount={slidesCount}
        />
      )}
      {withDots && (
        <Dots
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          slidesCount={slidesCount}
        />
      )}
    </>
  );
};

export default Slider;
const Dots = ({
  currentIndex,
  setCurrentIndex,
  slidesCount,
}: {
  setCurrentIndex: (value: number) => void;
  currentIndex: number;
  slidesCount: number;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: slidesCount }).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-fade" : "bg-shadow"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = ({
  setCurrentIndex,
  slidesCount,
}: {
  setCurrentIndex: SetCurrentIndexType;
  slidesCount: number;
}) => {
  return (
    <>
      <button
        onClick={() => {
          setCurrentIndex((prev: number) => {
            return prev !== 0 ? prev - 1 : slidesCount - 1;
          });
        }}
        className="absolute top-[50%] left-20 translate-y-[50%] flex w-12 h-12 bg-fade items-center opacity-50 hover:opacity-100 transition-all hover:scale-110 justify-center text-xl text-mainBg rounded-full"
      >
        <BiSolidLeftArrow />
      </button>
      <button
        onClick={() => {
          setCurrentIndex((prev) => {
            return prev !== slidesCount - 1 ? prev + 1 : 0;
          });
        }}
        className="absolute top-[50%] right-20 translate-y-[50%] flex w-12 h-12 bg-fade items-center opacity-50 hover:opacity-100 transition-all hover:scale-110 justify-center text-xl text-mainBg rounded-full"
      >
        <BiSolidRightArrow />
      </button>
    </>
  );
};
