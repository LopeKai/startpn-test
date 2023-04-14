import { ErrorInfo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from "formik"

import imageRegister from '../../images/png/registerAndLogin.png'
import logo from '../../images/png/logo.png'

import { Button } from "../../components/Form/Button"
import { Input } from "../../components/Form/Input"
import { Api } from '../../helpers/Api'
import { toast } from 'react-toastify'

export const Login = () => {
    const navigate = useNavigate()

    const handleLoading = async (values: { email: string; password: string }) => {
        const { email, password } = values;

        await Api.SignIn({ email, password })
            .then(result => {
                toast.success('Login com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/dashboard")
            })
            .catch((error) => {
                if (error.response.data.message === 'E-mail e/ou senha incorreta') {
                    toast.error('E-mail e/ou senha incorreta', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    return
                }
                console.log(error)
            });
    };
    return (
        <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[667px,1fr] gap-0">
            <div className="bg-red-50 hidden lg:block">
                <img
                    src={imageRegister}
                    alt="Steve Jobs"
                    className="object-cover w-full h-screen"
                />
            </div>

            <div className="w-full flex flex-col items-center justify-center px-6 lg:px-12">
                <header className="lg:w-[420px] mx-auto">
                    <img
                        src={logo}
                        alt="Logotipo"
                    />
                </header>

                <div className="mt-10 mb-7 lg:w-[420px]">
                    <h1 className="text-2xl font-medium tracking-wide text-blue-500">Dados de acesso</h1>
                </div>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    // validationSchema={validationSchema}
                    onSubmit={(values) => handleLoading(values)}
                >
                    {({ errors, isSubmitting, setFieldValue, values }) => (
                        <Form className="w-full lg:w-auto">
                            <fieldset className="w-full lg:w-[420px]">
                                <Input
                                    name="email"
                                    label="E-mail"
                                    placeholder="Insira seu e-mail"
                                />
                            </fieldset>

                            <fieldset className="w-full lg:w-[420px]" >
                                <Input
                                    type='password'
                                    name="password"
                                    label="Senha"
                                    placeholder="Insira uma senha"
                                />
                            </fieldset>

                            <div className="w-full lg:w-[420px] mx-auto flex flex-col lg:flex-row items-center justify-center mt-12">
                                <Button
                                    type="submit"
                                    title="Entrar"
                                />
                                <div className="w-full flex justify-center lg:justify-end mt-5 lg:mt-0 ">
                                    <a className="text-sm text-blue-500 font-medium" href="">Esqueceu a senha?</a>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Link
                                    to="/cadastro"
                                    className='w-[185px]'
                                >
                                    <Button
                                        type="submit"
                                        title="Cadastrar"
                                    />
                                </Link>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}