import React, { useState } from 'react';
import FullScreenZoomView from './FullScreenZoomView';
import RollingGallery from './RollingGallery';

const Menu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-6 pb-20">
      <h1 className="text-center text-3xl font-bold mb-6 text-white/90">Our Menu</h1>
      <div className="">
  
          <RollingGallery autoplay={false} />
      </div>

      {selected && (
        <FullScreenZoomView image={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Menu;
