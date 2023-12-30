import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../shared/button";
import { FormWrapper } from "../../shared/form/form-wrapper";
import { TextField } from "../../shared/form/text-field";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../providers/auth-provider";

const Login: React.FC = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const refSignin = useRef<HTMLFormElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({ email: "", password: "" });
  useEffect(() => {
    if (refInputEmail.current) refInputEmail.current.focus();
  }, []);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setData((p) => ({ ...p, [name]: value }));
  };
  const handleReset = () => {
    setData({ email: "", password: "" });
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (auth) {
      auth.signin(data, () => {
        navigate(from, { replace: true });
      });
    }
  }

  return (
    <>
      {" "}
      <FormWrapper title={"Форма авторизации"}>
        {!auth.user.email ? (
          <form
            ref={refSignin}
            onSubmit={(e) => handleSubmit(e)}
            onChange={handleChange}
            onReset={handleReset}
          >
            <TextField
              inputRef={refInputEmail}
              type="email"
              name="email"
              placeholder={"Введите почту"}
              autocomplete={"email"}
              label={"Укажите почту"}
              isRequired={true}
              componentStyle={true}
            />
            <TextField
              type="password"
              name="password"
              autocomplete="current-password"
              placeholder={"Введите пароль"}
              label={"Введите пароль"}
              isRequired={true}
              componentStyle={true}
            />

            <Button type={"submit"}>Войти</Button>
          </form>
        ) : (
          <>
            <h1>Добро пожаловать {auth.user.email}</h1>
            <button onClick={() => auth.signout(() => navigate(""))}>
              Выйти
            </button>
          </>
        )}
      </FormWrapper>
    </>
  );
};
export default Login;
