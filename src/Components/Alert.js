import React from 'react';

export default function Alert(props) {
    const { alert } = props;

    if (!alert) {
        return null; // Don't render anything if alert is null
    }

    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (
     <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(alert.type)}:</strong> {alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

