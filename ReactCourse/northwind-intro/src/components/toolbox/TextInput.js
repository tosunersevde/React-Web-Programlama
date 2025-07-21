import React from "react";

//React Hook
//Parametre olarak bir obje gecilir bu react'taki this.props gibidr.
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
    let wrapperClass = "form-group"
    //hata varsa
    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            {/* label id vermek icin vs. kullanilabilir  */}
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* yukardan gonderilen degerler */}
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}>
                </input>
                {/* hata varsa */}
                {error&&<div className="alert alert-danger">{error}</div>} 
            </div>
        </div>
    )
};

export default TextInput;