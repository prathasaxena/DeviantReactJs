import React from 'react';

export const default  Hoc = (App, color) => {
    return (
        <div style={{ backgroundColor: color }}>
            <App/>
        </div>
  )

}