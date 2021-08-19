import React from 'react'

const Notification = ({ message, alert }) => {
    if (message === null) {
        return null
    }

    return(
        <div className={alert}>
            {message}
        </div>
    )
}

export default Notification