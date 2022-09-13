import { StyleForm } from "../styles/form";
import Link from "next/link";

function index() {
  return (
    <StyleForm>
    <div>
      <div className="form-signin">
      <h1 className="text-center text-login">CALE VIAL</h1> 
        <br />
        <div className="center">
          <button
            className="button-signup fondo-color-signup">
            <Link href='./login'>
            Inciar sesión
            </Link>
          </button>
        </div>
      </div>
    </div>
  </StyleForm>
  )
}

export default index