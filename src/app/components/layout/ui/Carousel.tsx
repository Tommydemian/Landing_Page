// "use client";
// import { useState, useRef, useEffect, useCallback } from "react";
// import { cn } from "@/lib/utils/cn";

// const words = [
//     "AI",
//     "Software",
//     "Cyber security",
//     "Data Science",
//     "FrontEnd ",
//     "Backend",
//     "Deep Learning",
//     "Fullstack Dev",
//     "Multistack Dev",
// ];

// export const Carousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);

//     const nextIndex = useCallback(() => {
//         setActiveIndex((prev) => (prev + 1) % words.length);
//     }, []);

//     const prevIndex = useCallback(() => {
//         setActiveIndex((prev) => (prev - 1 + words.length) % words.length);
//     }, []);

//     const carouselRef = useRef<HTMLUListElement | null>(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     setIsVisible(entry.isIntersecting);
//                 });
//             },
//             {
//                 root: null,
//                 rootMargin: "10px",
//                 threshold: 0.1,
//             },
//         );

//         if (carouselRef.current != null) {
//             observer.observe(carouselRef.current);
//         }

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     useEffect(() => {
//         if (!isVisible) return;

//         const intervalId = setInterval(() => {
//             nextIndex();
//         }, 5000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [isVisible]);

//     return (
//         <div className="flex min-h-screen items-center justify-center">
//             <ul ref={carouselRef} className="carousel-grid relative bg-lime-50">
//                 {words.map((word, index) => (
//                     <p
//                         className={cn(
//                             "text-nowrap text-[4.5rem] text-slate-700 ",
//                             activeIndex === index
//                                 ? "active translate-x-0 text-center opacity-100 transition-all duration-1000 ease-in-out"
//                                 : "translate-x-4 opacity-0",
//                         )}
//                         key={word}
//                     >
//                         {word}
//                     </p>
//                 ))}
//                 <div className="absolute w-full">
//                     <button
//                         className="button-base absolute left-[25%] rounded-sm bg-red-600"
//                         type="button"
//                         onClick={prevIndex}
//                     >
//                         prev
//                     </button>
//                     <button
//                         className="button-base absolute right-[25%] rounded-sm bg-red-600"
//                         type="button"
//                         onClick={nextIndex}
//                     >
//                         next
//                     </button>
//                 </div>
//             </ul>
//         </div>
//     );
// };
