import React, { useEffect } from 'react';

const Ironverse = () => {

  useEffect(() => {
    const id = setInterval(() => {
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.style.display = "block"
        clearInterval(id)
      }
    }, 500)
    
    
  }, []);

  return (
    <div>
    </div>
  );
};

export default Ironverse;
