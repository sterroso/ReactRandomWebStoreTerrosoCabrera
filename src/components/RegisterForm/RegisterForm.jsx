import React, { useState, useEffect, useRef } from "react";
import SideImage from "./side-register-form.png";

const RegisterForm = () => {
    const userData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    };

    const [user, setUser] = useState(userData);

    const isValidEmail = async (address) => {
        let retVal = false;

        try {
            const requestString = new URL(`${process.env.REACT_APP_ABSTRACT_BASE_URL}`);
            requestString.searchParams.append('api_key', process.env.REACT_APP_ABSTRACT_API_KEY);
            requestString.searchParams.append('email', address);
            requestString.searchParams.append('auto_correct', false);

            const res = await fetch(requestString);

            const data = await res.json();

            if (data.deliverability in ['DELIVERABLE', 'RISKY'] && data.quality_score >= 0.8) {
                return { reliable: true, email: data.email };
            }

            return { reliable: false };
        } catch (err) {
            console.error(err);
        }

        return retVal;
    }

    const isValidName = (name) => {
        // Patrón de nombre válido.
        const namePattern = /^[a-z\W]+([ ][a-z\W]+)*$/ig;

        // Patrón de espacios repetidos
        const repeatedSpaces = /[\s]{2,}/g;

        // Nombre simplificado: sin espacios repetidos, sin espacios al principio o final.
        const simpleName = name.trim().replaceAll(repeatedSpaces, ' ');

        // Búsqueda de coincidencia del parámetro pasado (name) con el patrón.
        const match = simpleName.match(namePattern);

        // Devuelve un objeto con el resultado del match y el nombre simplificado.
        return { match: (match && match[0] === simpleName), name: simpleName };
    }

    const isValidPhoneNumber = (number) => {
        // Patrón (expresión regular) de número de teléfono válido.
        const phoneNumberPattern = /^([\+]?[0-9]{1,3})?([ \-]?[0-9]{2,3})([ \-]?[0-9]{3,4})([ \-]?[0-9]{4})$/g;

        // Patrón de búsqueda de paréntesis
        const parenthesisPattern = /[\(]?[\)]?/g;

        // Número simplificado: sin espacios al principio o al final, sin paréntesis.
        const simplifiedNumber = number.trim().replaceAll(parenthesisPattern, '');

        // Búsqueda de coincidencia del parámetro pasado (number) con el patrón.
        const match = simplifiedNumber.match(phoneNumberPattern);

        // Si la función match devuelve un arreglo de 1 (un) elemento,
        // y ese elemento coincide con el parámetro proporcionado (number),
        // el número de teléfono es válido.
        return { match: (match ? true : false && match[0] === simplifiedNumber), phoneNumber: simplifiedNumber };
    }

    const inputUserFirstName = useRef(null);

    const inputUserLastName = useRef(null);

    const inputUserEmail = useRef(null);

    const inputUserPhoneNumber = useRef(null);

    const handleNameChange = (event) => {
        if (!isValidName(event.target.value).match) {

        }
    }

    const handleFormSubmit = () => {
        let allValid = true;

        allValid &&=    isValidName(inputUserFirstName.value) &&
                        isValidName(inputUserLastName.value) &&
                        isValidEmail(inputUserEmail.value) &&
                        isValidPhoneNumber(inputUserPhoneNumber.value);

        const validUser = {};

        if (allValid) {
            validUser.firstName = inputUserFirstName.value;
            validUser.lastName = inputUserLastName.value;
            validUser.email = inputUserEmail.value;
            validUser.phoneNumber = inputUserPhoneNumber.value;

            setUser(validUser);
        }
     }

  return (
    <div className="card card-side bg-base-100 shadow-xl w-2/3 ml-auto mr-auto mt-12 mb-12">
        <figure><img src={ SideImage } alt="Registro de Nuevo Usuario" /></figure>

        <div className="card-body">
            <h2 className="card-title">Registro</h2>

            <form id="register-form" className="w-full">
                <div className="form-control mt-5 w-full">
                    <label className="label" htmlFor="userFirstName">
                        <span className="label-text w-full">Nombre(s) de pila completos</span>
                    </label>

                    <label className="input-group w-full">
                        <span>Nombre(s)</span>
                        <input type="text" ref={inputUserFirstName} name="userFirstName" id="userFirstName" className="input input-bordered w-full" minLength="1" maxLength="45" required />
                    </label>
                </div>

                <div className="form-control mt-5 w-full">
                    <label className="label" htmlFor="userLastName">
                        <span className="label-text w-full">Apellido(s) completos</span>
                    </label>

                    <label className="input-group w-full">
                        <span>Apellido(s)</span>
                        <input type="text" name="userLastName" id="userLastName" className="input input-bordered w-full" minLength="1" maxLength="45" required />
                    </label>
                </div>

                <div className="form-control mt-5 w-full">
                    <label className="label" htmlFor="userEmail">
                        <span className="label-text w-full">Dirección de correo electrónico</span>
                    </label>

                    <label className="input-group w-full">
                        <span>E-mail</span>
                        <input type="email" name="userEmail" id="userEmail" className="input input-bordered w-full" minLength="1" maxLength="90" required />
                    </label>
                </div>

                <div className="form-control mt-5 w-full">
                    <label className="label" htmlFor="userPhoneNumber">
                        <span className="label-text w-full">Número de teléfono móvil</span>
                    </label>

                    <label className="input-group w-full">
                        <span>Teléfono</span>
                        <input type="tel" name="userPhoneNumber" id="userPhoneNumber" className="input input-bordered w-full" maxLength="18" />
                    </label>
                </div>

                <div className="card-actions justify-end mt-5">
                    <input type="submit" className="btn btn-primary" value="Regístrame" onClick={handleFormSubmit} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm;