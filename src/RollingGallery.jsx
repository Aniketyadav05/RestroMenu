import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import Menu from "./images/Menu1.png"
const IMGS = [
  Menu,
  Menu,
  Menu,
  Menu,
  Menu,
 
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 600 : 1200;
  const faceCount = images.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#FEDC12]">
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Mumbai background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative flex h-full items-center justify-center [perspective:1000px]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          style={{ transform: transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          className="flex h-full items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="absolute flex h-full w-full items-center justify-center [backface-visibility:hidden]"
              style={{
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={`Slide ${i + 1}`}
                className="pointer-events-none h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
