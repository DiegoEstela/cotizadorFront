import styled from "styled-components";

export const StyleForm = styled.div`
  .text-login {
    font-size: 26px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-signin {
    width: 100%;
    max-width: 520px;
    height: 380px;
    padding: 15px;
    margin: auto;
    background-color: white;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    margin-top: 10%;
  }

  .form-home {

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 520px;
    height: 380px;
    padding: 15px;
    margin: auto;
    background-color: white;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    margin-top: 10%;
  }
  .text-center {
    text-align: center;
  }

  .homeContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;

  }
  /* INPUTS */
  .input-form {
    background-color: transparent;
    border: 1.5px solid rgb(0 0 0 / 10%);
    border-radius: 5px;
    padding: 10px;
    outline: none;
    width: 90%;
    font-size: 16px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin: 5px;
  }
  /* BUTTON SIGNUP */
  .button-signup {
    margin-bottom: 2%;
    display: inline-block;
    font-weight: 400;
    color: black;
    height: 45px;
    width: 90%;
    text-align: center;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: 0.2s;
  }

  .button-home {
    margin-top: 5%;
    margin-bottom: 5%;
    font-weight: 400;
    color: black;
    height: 45px;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    border: 1px solid transparent;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .fondo-color-signup {
    background: #FF5801;
  }
`;
