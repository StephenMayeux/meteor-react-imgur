import React from 'react';

const ImageScore = (props) => {
  const { ups, downs } = props;
  const upPercent = `${100 * (ups / (ups + downs))}%`;
  const downPercent = `${100 * (downs / (ups + downs))}%`;

  return (
    <div>
      Votes
      <div className="progress">
        <div style={{ width: upPercent }} className="progress-bar progress-bar-success progress-bar-striped"></div>
        <div style={{ width: downPercent }} className="progress-bar progress-bar-danger progress-bar-striped"></div>
      </div>
    </div>
  );
};

export default ImageScore;
