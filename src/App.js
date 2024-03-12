// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Home from './pages/Home'
// import Projects from './pages/Projects'
// import Testimonials from './pages/Testimonials'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//           <Route path= '/' element = {<Home/>} />
//           <Route path= '/about' element = {<About/>} />
//           <Route path= '/contact' element = {<Contact/>} />
//           <Route path= '/projects' element = {<Projects/>} />
//           <Route path= '/testimonials' element = {<Testimonials/>}/>
//       </Routes>
//       </BrowserRouter> 
//     </>
//   )
// }

// export default App

import React from 'react'
import Props from './components/Props'
import Toheeb from './components/Toheeb'
import Card from './components/Card'

const App = () => {
  const image1 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/246787/1.jpg?7984'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/0412362/1.jpg?1105'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/4685192/1.jpg?1723'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/8888501/1.jpg?2817'
  const image5 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/1151371/1.jpg?8344'
  return (
    <div>
      {/* <Props name='Toheeb' job='web developer' worth='millionaire'/>
      <Props name='Nike' job='mobile app developer' worth='billionaire' />
      <Props name='Christianah' job='Data Analyst' worth='billionaire' />
      <Props name='Lloid' job='Product designer' worth='thrillionaire' />
      <Props name= 'Teeboy' job='Business Developer' worth='thrillionaire' /> */}

      {/* <Toheeb name='Toheeb' job='web developer' salary={500000} />
      <Toheeb name='Nike' job='mobile app developer' salary={500000}/>
      <Toheeb name='Christianah' job='Data Analyst' salary={500000} />
      <Toheeb name='Lloid' job='Product designer' salary={500000} />
      <Toheeb name='Teeboy' job='Business Developer' salary={500000} /> */}
      <div className='d-flex flex-wrap gap-4 vh-100'>
      <Card image={image1} name='Computer mouse' description='Durable computer mouse for laptops and desktop' price={56} />
      <Card image={image2} name='LG 55 inches TV' description='Full HD 55 inches Led Tv' price={90} />
      <Card image={image3} name='Samsung A12' description='Samsung mobile A12 4GB RAM 256GB ROM' price={45} />
      <Card image={image4} name='Washing machine' description= 'Hisense durable washing machine' price={80} />
      <Card image={image5} name='White Gucci shoes' description='White Gucci sneakers durable and suitable for gymnastics' price={15} />
      </div>
      
    </div>
  )
}

export default App