import React from 'react'
import RollingGallery from './RollingGallery'
  

const App = () => {
  return (
    <div>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  )
}

export default App