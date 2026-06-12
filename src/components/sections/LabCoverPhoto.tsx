import React from 'react';
import deptPhoto from '@assets/department_1778132799197.jpg';

export function LabCoverPhoto() {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden border-b border-border">
      <img
        src={deptPhoto}
        alt="Department of Botany, Banaras Hindu University"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Very subtle dark gradient at bottom for a natural fade into next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}
