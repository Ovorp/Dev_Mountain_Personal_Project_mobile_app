import React, { useState } from 'react';
import ImageForm from './../../ImageForm';

export default function TripPic() {
  const [displayPic, setDisplayPic] = useState(false);

  return (
    <div>
      Trip Pic
      <button onClick={() => setDisplayPic(!displayPic)}>Add Pictures</button>
      {displayPic ? <ImageForm /> : null}
    </div>
  );
}
