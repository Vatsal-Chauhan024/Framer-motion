import React from 'react'
import Card from './components/Card'
// import Box1 from './components/Box1'
// import Box2 from './components/Box2'
// import Box3 from './components/Box3'
// import Box4 from './components/Box4'
// import Box5 from './components/Box5'
// import Grid from './components/Grid'

const App = () => {
  return (
   <>
   <div className='w-full min-h-screen bg-indigo-50 flex flex-col items-center justify-center'>

   <h1 className="text-7xl text-center font-semibold text-indigo-500 font-sans">Vatsal Chauhan</h1>
   <div className='w-full p-5'>
   <div className='flex flex-col gap-32 items-center'>
      {/* <Box1/>
      <Box2/> */}
      {/* <Box3/> */}
      {/* <Box4/> */}
      {/* <Box5/> */}
      {/* <Grid/> */}
      <Card/>
   </div>
   </div>
   </div>
   </>
  )
}

export default App
