import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

const Hatch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Hatch</button>
      <Canvas>
        {/* Add 3D hatch elements here */}
      </Canvas>
    </div>
  );
};

export default Hatch;
