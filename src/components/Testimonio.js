import React from "react";
import "../style-sheets/Testimonio.css";

function Testimonio(props) {
  const textoTestimonio = props.testimonio;
  const palabraClave = "freeCodeCamp";

  var arrayTestimonio = textoTestimonio.split(" ");
  var testimonioFinal = arrayTestimonio.map((n, index) => n === palabraClave ? (<strong key={index}>{n} </strong>) : (n + " "));

  return (
    <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../img/testimonio-${props.imagen}.png`)}
          alt={`Foto de ${props.nombre}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className="cargo-testimonio">
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className="texto-testimonio">
            "{testimonioFinal}"
          </p>
        </div>
      </div>
  );
}

export default Testimonio;