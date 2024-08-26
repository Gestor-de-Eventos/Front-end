import { useRef, useState } from "react";
import logoVerde from "../../../assets/img/logo-verde.png";

export function Registrar() {
  const [registerUsers, setRegisterUsers] = useState({
    document: "",
    name: "",
    last_names: "",
    email: "",
    phone: "",
    role: "Instructor" || "Coordinador",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [watchPassword, setWatchPassword] = useState(false);

  const feedbackRegexDocument = useRef(null);
  const feedbackRegexName = useRef(null);
  const feedbackRegexLastNames = useRef(null);
  const feedbackRegexEmail = useRef(null);
  const feedbackRegexPhone = useRef(null);
  const feedbackPassword = useRef(null);

  const [documentEvent, setDocumentEvent] = useState(false);
  const [nameEvent, setNameEvent] = useState(false);
  const [lastNamesEvent, setLastNamesEvent] = useState(false);
  const [emailEvent, setEmailEvent] = useState(false);
  const [phoneEvent, setPhoneEvent] = useState(false);
  const [passwordEvent, setPasswordEvent] = useState(false);

  const typePassoword = watchPassword ? "text" : "password";
  const eyePassword = watchPassword
    ? "fa-solid fa-eye cursor-pointer hover:bg-sitenary-color rounded-full"
    : "fa-solid fa-eye-slash cursor-pointer hover:bg-sitenary-color rounded-full";

  const handleChangeRegisterUser = (e) => {
    const { name, value } = e.target;
    setRegisterUsers((prevDataRegisterUsers) => {
      const newDataRegisterUsers = {
        ...prevDataRegisterUsers,
        [name]: value,
      };
      if (name === "document") {
        regexDocument(value);
      } else if (name === "name") {
        regexName(value);
      } else if (name === "last_names") {
        regexLastNames(value);
      } else if (name === "email") {
        regexEmail(value);
      } else if (name === "phone") {
        regexPhone(value);
      } else {
        regexPassword(value);
      }
      return newDataRegisterUsers;
    });
  };

  const handleSubmitRegisterUsers = async (e) => {
    e.preventDefault();
    const { document, phone, ...restRegisterUsers } = registerUsers;
    const dataToSend = {
      ...restRegisterUsers,
      document: parseInt(document),
      phone: parseInt(phone),
    };
    try {
      const responseRegisterUsers = await fetch(
        "https://eventos.sharepointeros.com/api/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      const dataRegisterUsers = await responseRegisterUsers.json();
      if (responseRegisterUsers.status === 200) {
        setSuccessMessage("Usuario registrado correctamente");
        setErrorMessage("");
      } else {
        setErrorMessage(dataRegisterUsers.message);
        setSuccessMessage("");
      }
    } catch {
      setErrorMessage("Error al registrar el usuario");
      setSuccessMessage("");
    }
  };

  const regexDocument = (document) => {
    const documentRegex = /^[0-9]{1,9}$/;
    const documentHasCorrectRegex = documentRegex.test(document);

    if (!documentHasCorrectRegex) {
      feedbackRegexDocument.current.textContent = "Documento inválido";
      feedbackRegexDocument.current.style.color = "red";
      setDocumentEvent(false);
    } else {
      feedbackRegexDocument.current.textContent = "Documento válido";
      feedbackRegexDocument.current.style.color = "green";
      setDocumentEvent(true);
    }
  };

  const regexName = (name) => {
    const nameRegex = /^[A-Za-zñ.Ñ:-á-|éí,óúÁÉÍ&%$ÓÚäëïöüÄËÏÖÜ0-9\s]{1,64}$/;
    const nameHasCorrectRegex = nameRegex.test(name);

    if (!nameHasCorrectRegex) {
      feedbackRegexName.current.textContent = "Nombre inválido";
      feedbackRegexName.current.style.color = "red";
      setNameEvent(false);
    } else {
      feedbackRegexName.current.textContent = "Nombre válido";
      feedbackRegexName.current.style.color = "green";
      setNameEvent(true);
    }
  };

  const regexLastNames = (last_names) => {
    const lastNamesRegex =
      /^[A-Za-zñ.Ñ:-á-|éí,óúÁÉÍ&%$ÓÚäëïöüÄËÏÖÜ0-9\s]{1,64}$/;
    const lastNamesHasCorrectRegex = lastNamesRegex.test(last_names);

    if (lastNamesHasCorrectRegex) {
      feedbackRegexLastNames.current.textContent = "Apellidos válidos";
      feedbackRegexLastNames.current.style.color = "green";
      setLastNamesEvent(true);
    } else {
      feedbackRegexLastNames.current.textContent = "Apellidos inválidos";
      feedbackRegexLastNames.current.style.color = "red";
      setLastNamesEvent(false);
    }
  };

  const regexEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailHasCorrectRegex = emailRegex.test(email);

    if (!emailHasCorrectRegex) {
      feedbackRegexEmail.current.textContent = "Correo inválido";
      feedbackRegexEmail.current.style.color = "red";
      setEmailEvent(false);
    } else {
      feedbackRegexEmail.current.textContent = "Correo válido";
      feedbackRegexEmail.current.style.color = "green";
      setEmailEvent(true);
    }
  };

  const regexPhone = (phone) => {
    const regexPhone = /^[0-9]{1,16}$/;
    const phoneHasCorrectRegex = regexPhone.test(phone);

    if (!phoneHasCorrectRegex) {
      feedbackRegexPhone.current.textContent = "Telefono inválido";
      feedbackRegexPhone.current.style.color = "red";
      setPhoneEvent(false);
    } else {
      feedbackRegexPhone.current.textContent = "Telefono válido";
      feedbackRegexPhone.current.style.color = "green";
      setPhoneEvent(true);
    }
  };

  const regexPassword = (password) => {
    const regexPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,256}$/;
    const passwordHasCorrectRegex = regexPassword.test(password);

    if (!passwordHasCorrectRegex) {
      feedbackPassword.current.textContent = "Contraseña invalida";
      feedbackPassword.current.style.color = "red";
      setPasswordEvent(false);
    } else {
      feedbackPassword.current.textContent = "Contraseña valida";
      feedbackPassword.current.style.color = "green";
      setPasswordEvent(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 gap-6 max-w-96 m-auto">
      <a
        href="/"
        className="flex gap-1 items-center absolute top-6 left-4 bg-primary text-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="w-5 h-5"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
        Regresar
      </a>
      <header>
        <img
          src={logoVerde.src}
          className="h-16 md:h-16"
          alt="Logo Blanco SENA"
        />
      </header>

      <main className="w-full">
        <section className="flex flex-col gap-12">
          <div>
            <h1 className="text-4xl font-bold text-center">Crea tu cuenta</h1>
          </div>
          <div>
            <form
              className="w-full mx-auto"
              onSubmit={handleSubmitRegisterUsers}
            >
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                <div>
                  <label
                    htmlFor="role"
                    className="text-center block mb-1 text-base font-bold text-primary "
                  >
                    Rol de cuenta
                  </label>
                  <select
                    id="role"
                    value={registerUsers.role}
                    name="role"
                    onChange={handleChangeRegisterUser}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  >
                    <option value="Coordinador">Coordinador</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="id"
                    className="text-center block mb-1 text-base font-bold text-primary "
                  >
                    Documento
                  </label>
                  <input
                    type="number"
                    id="document"
                    name="document"
                    onChange={handleChangeRegisterUser}
                    value={registerUsers.document}
                    placeholder="Documento de identidad"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    required
                  />
                  <p
                    className="text-center text-base"
                    ref={feedbackRegexDocument}
                  ></p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div>
                  <label
                    htmlFor="id"
                    className="text-center block mb-1 text-base font-bold text-primary "
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="name"
                    onChange={handleChangeRegisterUser}
                    value={registerUsers.name}
                    placeholder="Nombres"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    required
                  />
                  <p
                    className="text-center text-base"
                    ref={feedbackRegexName}
                  ></p>
                </div>

                <div>
                  <label
                    htmlFor="id"
                    className="text-center block mb-1 text-base font-bold text-primary"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="last_names"
                    onChange={handleChangeRegisterUser}
                    value={registerUsers.last_names}
                    id="lastNames"
                    placeholder="Apellidos"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  />
                  <p
                    className="text-center text-base"
                    ref={feedbackRegexLastNames}
                  ></p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div>
                  <label
                    htmlFor="id"
                    className="text-center block mb-1 text-base font-bold text-primary "
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChangeRegisterUser}
                    value={registerUsers.email}
                    id="email"
                    placeholder="Correo electrónico"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  />
                  <p
                    className="text-center text-base"
                    ref={feedbackRegexEmail}
                  ></p>
                </div>

                <div>
                  <label
                    htmlFor="id"
                    className="text-center block mb-1 text-base font-bold text-primary"
                  >
                    Celular
                  </label>
                  <input
                    type="number"
                    onChange={handleChangeRegisterUser}
                    value={registerUsers.phone}
                    id="phone"
                    name="phone"
                    placeholder="Teléfono celular"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  />
                  <p
                    className="text-center text-base"
                    ref={feedbackRegexPhone}
                  ></p>
                </div>
              </div>
              <div className="flex text-center items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-center block mb-2 text-base font-bold text-primary"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <div className="relative shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg px-2.5 py-3">
                  <input
                    id="password"
                    name="password"
                    type={typePassoword}
                    value={registerUsers.password}
                    onChange={handleChangeRegisterUser}
                    placeholder="Contraseña"
                    className="w-full bg-gray-50 border-0 text-quaternary-color pr-10 focus:outline-none"
                  />
                  <i
                    className={`${eyePassword} absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer`}
                    aria-hidden={watchPassword ? "false" : "true"}
                    onClick={() => setWatchPassword(!watchPassword)}
                  ></i>
                </div>
                <p className="text-center text-base" ref={feedbackPassword}></p>
              </div>
              <div className="flex justify-center text-center">
                {successMessage && (
                  <p className="text-green-500 text-sm">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 w-full text-white bg-[#277400] hover:bg-[#277400] focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                style={{
                  background:
                    documentEvent &&
                    nameEvent &&
                    lastNamesEvent &&
                    emailEvent &&
                    phoneEvent &&
                    passwordEvent
                      ? "black"
                      : "rgba(0, 0, 0, 0.2)",
                  pointerEvents:
                    documentEvent &&
                    nameEvent &&
                    lastNamesEvent &&
                    emailEvent &&
                    phoneEvent &&
                    passwordEvent
                      ? "auto"
                      : "none",
                  color:
                    documentEvent &&
                    nameEvent &&
                    lastNamesEvent &&
                    emailEvent &&
                    phoneEvent &&
                    passwordEvent
                      ? "white"
                      : "black",
                }}
              >
                Registrarme
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p className=" text-black font-medium text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <a href="/auth/iniciarsesion" className="text-primary">
            Iniciar sesión
          </a>
        </p>
      </footer>
    </div>
  );
}
