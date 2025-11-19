import { useState } from 'react'
import Home from './components/Home.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
