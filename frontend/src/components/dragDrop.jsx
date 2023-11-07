import React, { useState } from 'react';

const DragAndDropImage = () => {
  const [imageSrc, setImageSrc] = useState('path/to/first/image.jpg');

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedImageId = e.dataTransfer.getData('text');
    const draggedImage = document.getElementById(draggedImageId);
    if (draggedImage) {
      const newImageSrc = draggedImage.getAttribute('src');
      setImageSrc(newImageSrc);
    }
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ width: '300px', height: '300px', border: '1px solid black' }}
      >
        <img
          src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{ width: '100px', height: '100px', border: '1px solid black' }}
      >
        <img
          id="draggedImage"
          src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Drag Image"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default DragAndDropImage;
