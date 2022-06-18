import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../ui/form/Form";
import { useActions } from "../hooks/useActions";
import { useDispatch } from "../hooks/useDispatch";
import FormValuesType from "../../types/FormValuesType";
import { getEmailError, getPasswordError } from "../../helpers/validation";
import { useSelector } from "../hooks/useSelector";
import FormTextField from "../ui/formTextField/FormTextField";
import Button from "../ui/button/Button";
import { loginUser } from "../../store/auth/authThunks";
import Storage from "../../helpers/Storage";

import "./Auth.scss";
import useTranslate from "../hooks/useTranslate";


const Auth: React.FC = () => {
    const { t } = useTranslate();
    const [values, _setValues] = useState<FormValuesType>({});
    const [validationsError, setValidationsError] = useState("");
    const loading = useSelector(state => state.auth.loading);
    const { setAuthError } = useActions();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const serverError = useSelector(state => state.auth.error);
    const error: string = validationsError || (serverError ? "No active account found with the given credentials" : "");

    const handleAuth = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        const validationsError =
            getEmailError(values.email)
            || getPasswordError(values.password);

        if(validationsError) {
            setValidationsError(validationsError);
        } else {
            dispatch(loginUser({
                email: values.email,
                password: values.password
            }))
            .then(() => {
                if(Storage.get("userLogged", false)) {
                    navigate("/");
                }
            })
        }
    };

    const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
        _setValues(callback);
        setValidationsError("");
        setAuthError(false);
    }


    return (
            <div className="auth-wrap">
                <Form
                    title={t("login.title")}
                    loading={loading}
                >
                    <FormTextField
                        autofocus
                        label={t("login.email")}
                        type="email"
                        name="email"
                        values={values}
                        setValues={setValues}
                    />

                    <FormTextField
                        label={t("login.password")}
                        type="password"
                        name="password"
                        values={values}
                        setValues={setValues}
                    />

                    {error &&
                        <div className="form-error">
                            {error}
                        </div>
                    }
                    <Button onClick={handleAuth}>
                        {t("login.submit")}
                    </Button>

                    <p>{t("login.question")}<a href="/registration" className="signup-link">{t("login.signup")}</a></p>

                </ Form>
            </div>
    )
}


export default Auth;