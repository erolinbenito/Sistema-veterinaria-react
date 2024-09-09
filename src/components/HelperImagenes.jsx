import React from "react";

function HelperImagenes({srcImagen, titulo, subtitulo}){
    return(

    <div className="helper">
        <img src={srcImagen} className="helper-imagen" width={300} height={168} />
        <h3 className="helper--titulo">{titulo}</h3>
        <p className="helper--subtitulo">{subtitulo}</p>
        <a className="helper--link" href="#">Conoce más </a>
    </div>
    )
}

export default HelperImagenes