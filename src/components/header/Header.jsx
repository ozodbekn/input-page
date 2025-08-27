// // hook = function

// import { useState } from "react"

// const Header = () => {
//     const [count, setCount] = useState(1) // return [value, func]
//     // condition rendering
//     const [isVisible, setIsVisible] = useState(false)
//     const inc = () => {
//         setCount((prev)=> prev + 1)
//     }
//     const dec = () => {
//         setCount((p) => p - 1)
//     }
//   return (
//     <div>
//         <h2>Header {count}</h2>
//         <button onClick={inc}>increment</button>
//         <button onClick={dec}>decrement</button>
//         <button onClick={() => setCount(0)}>reset</button>
//         <br />
//         <br />
//         <div>
//             <h3>Lorem ipsum dolor sit.</h3>
//             {
//                 isVisible &&
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et modi ad, velit pariatur debitis voluptatibus molestiae perferendis ducimus eius veritatis, ipsam porro voluptatem minima ratione aperiam rerum sint necessitatibus.</p>
//             }
//             <button onClick={()=> setIsVisible((prev) => !prev)}>
//                 {isVisible ? "hide" : "show"}
//             </button>
//         </div>
//     </div>
//   )
// }

// export default Header