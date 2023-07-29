import React from 'react';

const Snippet = (props) => {
    return (
        <div>
        <p><strong>{props.title}</strong> </p>
        <p>{props.timeAgo} </p>
        <p>{props.category} </p>
        </div>
    )
    
}

export default Snippet