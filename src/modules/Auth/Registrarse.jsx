import { useRef, useState } from "react";
import logoVerde from "../../assets/img/logo-verde.png";

export function Registrar() {
  const [registerUsers, setRegisterUsers] = useState({
    document: "",
    name: "",
    last_names: "",
    email: "",
    phone: "",
    role: "Instructor",
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

  const typePassword = watchPassword ? "text" : "password";
  const eyePassword = watchPassword
    ? "ri-eye-fill cursor-pointer hover:bg-sitenary-color rounded-full text-xl"
    : "ri-eye-off-fill cursor-pointer hover:bg-sitenary-color rounded-full text-xl";

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
      } else if (name === "password") {
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
    const documentRegex = /^[0-9]{1,16}$/;
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
    const lastNamesRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ\s]{1,64}$/;
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
      feedbackRegexPhone.current.textContent = "Teléfono inválido";
      feedbackRegexPhone.current.style.color = "red";
      setPhoneEvent(false);
    } else {
      feedbackRegexPhone.current.textContent = "Teléfono válido";
      feedbackRegexPhone.current.style.color = "green";
      setPhoneEvent(true);
    }
  };

  const regexPassword = (password) => {
    const regexPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,256}$/;
    const passwordHasCorrectRegex = regexPassword.test(password);

    if (!passwordHasCorrectRegex) {
      feedbackPassword.current.textContent = "Contraseña inválida";
      feedbackPassword.current.style.color = "red";
      setPasswordEvent(false);
    } else {
      feedbackPassword.current.textContent = "Contraseña válida";
      feedbackPassword.current.style.color = "green";
      setPasswordEvent(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 gap-6 max-w-[700px] m-auto">
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
        <section className="flex flex-col gap-7">
          <div>
            <h1 className="text-4xl font-bold text-center">Crea tu cuenta</h1>
          </div>
          <div>
            <form
              className="w-full mx-auto"
              onSubmit={handleSubmitRegisterUsers}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div>
                  <label
                    htmlFor="role"
                    className=" block mb-1 text-base font-bold text-primary "
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
                    htmlFor="document"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Documento
                  </label>
                  <input
                    id="document"
                    type="number"
                    placeholder="Ingresa tu documento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    name="document"
                    value={registerUsers.document}
                    onChange={handleChangeRegisterUser}
                    required
                  />
                  <span
                    ref={feedbackRegexDocument}
                    className="text-xs font-semibold"
                  ></span>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Nombres
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ingresa tus nombres"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    name="name"
                    value={registerUsers.name}
                    onChange={handleChangeRegisterUser}
                    required
                  />
                  <span
                    ref={feedbackRegexName}
                    className="text-xs font-semibold"
                  ></span>
                </div>
                <div>
                  <label
                    htmlFor="last_names"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Apellidos
                  </label>
                  <input
                    id="last_names"
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    name="last_names"
                    value={registerUsers.last_names}
                    onChange={handleChangeRegisterUser}
                    required
                  />
                  <span
                    ref={feedbackRegexLastNames}
                    className="text-xs font-semibold"
                  ></span>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    name="email"
                    value={registerUsers.email}
                    onChange={handleChangeRegisterUser}
                    required
                  />
                  <span
                    ref={feedbackRegexEmail}
                    className="text-xs font-semibold"
                  ></span>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                    name="phone"
                    value={registerUsers.phone}
                    onChange={handleChangeRegisterUser}
                    required
                  />
                  <span
                    ref={feedbackRegexPhone}
                    className="text-xs font-semibold"
                  ></span>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-base font-bold text-primary "
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={typePassword}
                      placeholder="Crea una contraseña"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                      name="password"
                      value={registerUsers.password}
                      onChange={handleChangeRegisterUser}
                      required
                    />
                    <i
                      onClick={() => setWatchPassword(!watchPassword)}
                      className={`${eyePassword} absolute top-3 right-3`}
                    ></i>
                  </div>
                  <span
                    ref={feedbackPassword}
                    className="text-xs font-semibold"
                  ></span>
                </div>
              </div>
              {successMessage && (
                <div className="text-center text-sm text-green-600 font-bold">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="text-center text-sm text-red-600 font-bold">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white text-lg font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={
                  !(
                    documentEvent &&
                    nameEvent &&
                    lastNamesEvent &&
                    emailEvent &&
                    phoneEvent &&
                    passwordEvent
                  )
                }
              >
                Crear cuenta
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
