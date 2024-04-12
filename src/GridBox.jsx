import React from 'react'

export const GridBox = ({binding, setBinding, children}) => {
    return (<div
    onClick={setBinding}
    style={{
        width: '100px',
        height: '100px',
        backgroundColor: binding ? '#1FC3BB' : '#EE6548',
        border: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        margin: '5px',
        padding: '10px',
        fontSize: '14px',
        textAlign: 'center',
        overflowWrap: 'break-word',
        hyphens: 'auto',
        boxSizing: 'border-box',
        lineHeight: 'normal', 
        overflow: 'hidden',
      }}
    >{children}</div>)
}