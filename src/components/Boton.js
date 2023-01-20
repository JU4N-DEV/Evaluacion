import React from "react";
import Button from "react-bootstrap/esm/Button";

class LoggingButton extends React.Component {
    handleClick() {
      alert("Pedido enviado...")
      window.location.reload()
    }
  
    render() {
      // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
      return (
        <Button onClick={() => this.handleClick()}>
          Enviar
        </Button>
      );
    }
  }

export default LoggingButton;