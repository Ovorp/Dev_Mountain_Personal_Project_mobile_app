import React, { useState } from 'react';
import ImageForm from './../../ImageForm';
import Button from 'react-bootstrap/Button';

export default function TripPic() {
  const [displayPic, setDisplayPic] = useState(false);

  return (
    <div>
      Trip Pic
      <Button onClick={() => setDisplayPic(!displayPic)}>Add Pictures</Button>
      {displayPic ? <ImageForm /> : null}
    </div>
  );
}
