
import { StyleForm } from "../../styles/form";
import Link from "next/link";
function index() {
  return (
    
    <StyleForm>
        <div className="form-home">
          <h1 className="text-center text-login">COTIZADOR WEB</h1>
          <div className="homeContainer">
            <button
              className="button-home fondo-color-signup"
              onClick={console.log("gola")}
            >
              Nueva cotizacion
            </button>
            <button
              className="button-home fondo-color-signup"
              onClick={console.log("gola")}
            >
              ABM generico
            </button>
          </div>
        </div>
    </StyleForm>
  )
}

export default index