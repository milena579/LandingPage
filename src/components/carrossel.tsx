// "use client"

// import { Carousel } from "@material-tailwind/react";
// import Image from "next/image";
// import i1 from "@/assets/imagemUm.png"
// import i2 from "@/assets/imagemDois.jpg"
// import i3 from "@/assets/cartoonlogo.png"

// export default function CarouselCustomNavigation() {

//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absoluteleft-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//       placeholder={<div className="h-full w-full bg-gray-200" />} // Example placeholder
//       onPointerEnterCapture={() => {/* handle pointer enter */}}
//       onPointerLeaveCapture={() => {/* handle pointer leave */}}
//     >
//         <div className="h-full w-screen ">
//             <Image
//                 src={i1}
//                 alt="image 1"
//             />

//         </div>

//         <div className="h-full w-screen "> 
//             <Image
//                 src={i2}
//                 alt="image 2"
//             />
//         </div>

//         <div className="h-full w-screen ">
//             <Image
//                 src={i1}
//                 alt="image 3"
//             />
//         </div>
//     </Carousel>
//   );
// }
