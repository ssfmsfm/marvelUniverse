import React, { useState } from "react";
import { useDispatch } from "../hooks/useDispatch";
import { useActions } from "../hooks/useActions";
import Form from "../ui/form/Form";
import { useNavigate } from "react-router-dom";
import FormValuesType from "../../types/FormValuesType";
import FormTextField from "../ui/formTextField/FormTextField";
import Button from "../ui/button/Button";
import { getEmailError, getPasswordError } from "../../helpers/validation";
import { registerUser } from "../../store/auth/authThunks";
import Storage from "../../helpers/Storage";
import useTranslate from "../hooks/useTranslate";

import "./Registration.scss";

const Registration: React.FC = () => {

    const { t } = useTranslate();
    const [values, _setValues] = useState<FormValuesType>({});
    const [validationsError, setValidationsError] = useState("");
    const { setAuthError } = useActions();
    const dispatch = useDispatch();
    const error: string = validationsError;
    const navigate = useNavigate();

    const handleRegistration = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        const validationsError =
            t(getEmailError(values.email))
            || t(getPasswordError(values.password));

        if(validationsError) {
            setValidationsError(validationsError);
        } else {
            dispatch(registerUser({
                email: values.email,
                password: values.password,
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
        <div className="registration-wrap">
            <Form title={t("registration.title")}>
                <FormTextField
                    autofocus
                    label={t("registration.email")}
                    type="email"
                    name="email"
                    values={values}
                    setValues={setValues}
                />
                <FormTextField
                    label={t("registration.password")}
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
                <Button onClick={handleRegistration}>
                    {t("registration.submit")}
                </Button>
                <p>{t("registration.question")}<a href="/login" className="signin-link">{t("registration.signin")}</a></p>
            </Form>
        </div>
    )
}


export default Registration;