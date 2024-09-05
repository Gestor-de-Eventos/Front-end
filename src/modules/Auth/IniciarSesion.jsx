import { useState, useRef, useEffect } from "react";
import logoVerde from "../../assets/img/logo-verde.png";
import { Input } from "@nextui-org/input";
import { EyeSlashFilledIcon } from "./components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./components/EyeFilledIcon";

export function IniciarSesion() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(
          `https://eventos.sharepointeros.com/api/auth/check-my-session`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.active) {
          setSession(data.session);
          window.location.href = "/";
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const [loginUsers, setLoginUsers] = useState({
    document: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [regexDocumentState, setRegexDocumentState] = useState(false);
  const [regexPasswordState, setRegexPasswordState] = useState(false);

  const documentRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUsers((prevLoginUsers) => {
      const newData = { ...prevLoginUsers, [name]: value };
      if (name === "document") {
        regexDocument(value);
      } else if (name === "password") {
        regexPassword(value);
      }
      return newData;
    });
  };

  const handleSubmitLoginUsers = async (e) => {
    e.preventDefault();
    const { document, ...restLoginUsers } = loginUsers;
    const dataToSend = { document: parseInt(document), ...restLoginUsers };
    try {
      const responseLoginUsers = await fetch(
        `https://eventos.sharepointeros.com/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      const dataLoginUsers = await responseLoginUsers.json();
      if (responseLoginUsers.status === 200) {
        localStorage.setItem("session", JSON.stringify(dataLoginUsers.session));
        setSession(dataLoginUsers.session);
        setSuccessMessage(dataLoginUsers.message);
        setErrorMessage("");
        window.location.href = "/";
      } else {
        setErrorMessage(dataLoginUsers.message);
        setSuccessMessage("");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error al iniciar sesión");
      setSuccessMessage("");
    }
  };

  if (loading) {
    return <div></div>;
  }

  const regexDocument = (document) => {
    const documentRegex = /^[0-9]{1,16}$/;
    const documentHasCorrectRegex = documentRegex.test(document);
    if (!documentHasCorrectRegex) {
      documentRef.current.textContent = "Documento inválido";
      documentRef.current.style.color = "red";
      setRegexDocumentState(false);
    } else {
      documentRef.current.textContent = "Documento válido";
      documentRef.current.style.color = "green";
      setRegexDocumentState(true);
    }
  };

  const regexPassword = (password) => {
    const regexPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,256}$/;
    const passwordHasCorrectRegex = regexPassword.test(password);
    if (!passwordHasCorrectRegex) {
      passwordRef.current.textContent = "Contraseña inválida";
      passwordRef.current.style.color = "red";
      setRegexPasswordState(false);
    } else {
      passwordRef.current.textContent = "Contraseña válida";
      passwordRef.current.style.color = "green";
      setRegexPasswordState(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 gap-6 max-w-96 m-auto">
      <a
        href="/"
        className="flex gap-1 items-center absolute -z-10 top-6 left-4 bg-primary text-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="w-5 h-5"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
        Ir al inicio
      </a>
      <header>
        <img
          src={logoVerde.src}
          className="h-16 md:h-16"
          alt="Logo Blanco SENA"
        />
      </header>

      <main>
        <section className="flex flex-col gap-12">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Te damos de nuevo la bienvenida
            </h1>
          </div>
          <div>
            <form className="w-full mx-auto" onSubmit={handleSubmitLoginUsers}>
              <div className="mb-5">
                <label
                  htmlFor="id"
                  className="block mb-2 text-base font-bold text-primary "
                >
                  Número de documento
                </label>
                <Input
                  size="lg"
                  type="number"
                  id="id"
                  value={loginUsers.document}
                  onChange={handleChangeLogin}
                  name="document"
                  pattern="[0-9]{1,16}"
                  placeholder="Ingresa tu numero de documento"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-2xl block w-full"
                  required
                />
                <p ref={documentRef}></p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base font-bold text-primary"
                >
                  Contraseña
                </label>

                <Input
                  size="lg"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-2xl block w-full "
                  value={loginUsers.password}
                  onChange={handleChangeLogin}
                  required
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
                <p ref={passwordRef}></p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="/auth/recuperar"
                  className="text-primary font-medium text-sm"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <button
                type="submit"
                className={`mt-4 w-full  font-bold rounded-lg text-sm px-5 py-2.5 text-center
                  ${
                    regexDocumentState && regexPasswordState
                      ? "bg-[#277400] text-white hover:bg-[#277400]"
                      : "bg-gray-300 text-black cursor-not-allowed"
                  }`}
                disabled={!(regexDocumentState && regexPasswordState)}
              >
                Iniciar sesión
              </button>
              <div className="text-center mt-3">
                {<p className="text-green-600">{successMessage}</p>}
                {<p className="text-red-600">{errorMessage}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p className=" text-black font-medium text-sm text-center">
          ¿No tienes una cuenta?{" "}
          <a
            href="/auth/registrarse"
            className="text-primary font-medium text-sm"
          >
            Regístrate
          </a>
        </p>
      </footer>
    </div>
  );
}
