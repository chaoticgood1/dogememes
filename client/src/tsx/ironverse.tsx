import React, { useEffect } from 'react';

const Ironverse = () => {

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.display = "block"
    }
    
  }, []);

  return (
    <div>
    </div>
  );
};

export default Ironverse;
