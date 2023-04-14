import { useEffect, ErrorInfo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Form, Formik, FormikValues } from 'formik'

import imageRegister from '../../images/png/registerAndLogin.png'
import logo from '../../images/png/logo.png'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { Api } from '../../helpers/Api'
import { toast } from 'react-toastify'

import { useMemo } from "react";

import * as yup from 'yup'
import { Login } from '../Login'

export const Register = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup
            .string()
            .email('Por favor insira um e-mail válido')
            .max(45, ({ max }) => `máximo ${max} caracteres`)
            .required('Campo obrigatório'),
        password: yup
            .string()
            .min(6, ({ min }) => `A senha deve ter ${min} caracteres`)
            .max(80, ({ max }) => `A senha deve ter ${max} caracteres`)
            .required('Campo obrigatório'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas devem corresponder')
            .required('Campo obrigatório'),
        terms: yup.string().required('Campo obrigatório'),
    })

    const handleNewUser = async (values: FormikValues) => {
        const { name, email, password } = values

        await Api.AddUser({ name, email, password })
            .then(result => {
                toast.success('Usuário cadastrado com sucesso.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/")
            })
            .catch((error) => {
                if (error.response.data.message === 'User already exists!') {
                    toast.error('Desculpe! Usuário já existe.', {
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
            });
    }

    return (
        <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[667px,1fr] gap-10 pt-10 lg:pt-0">

            <div className="hidden lg:block">
                <img
                    src={imageRegister}
                    alt="Steve Jobs"
                    className="object-cover w-full h-screen"
                />
            </div>

            <div className="w-full flex items-center flex-col justify-center  px-6 lg:px-12">
                <header>
                    <img
                        src={logo}
                        alt="Logotipo"
                    />

                </header>

                <div className="mt-10 mb-7  lg:w-[420px]">
                    <h1 className="text-2xl font-medium tracking-wide text-blue-500">Cadastro</h1>
                </div>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        terms: '',
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleNewUser(values)}
                >
                    {({ errors, isSubmitting, setFieldValue, values }) => (
                        <Form className="w-full lg:w-auto">
                            <fieldset className="grid lg:grid-cols-2 lg:gap-6">
                                <Input
                                    name="name"
                                    label="Nome"
                                    placeholder="Insira seu nome"
                                    error={errors.name}
                                />

                                <Input
                                    name="email"
                                    label="E-mail"
                                    placeholder="Insira seu e-mail"
                                    error={errors.email}
                                />

                            </fieldset>

                            <fieldset className="grid lg:grid-cols-2 lg:gap-6">
                                <Input
                                    name="password"
                                    type='password'
                                    label="Senha"
                                    placeholder="Insira uma senha"
                                    error={errors.password}
                                />

                                <Input
                                    name="confirmPassword"
                                    type='password'
                                    label="Confirme sua senha"
                                    placeholder="Confirme senha"
                                    error={errors.confirmPassword}
                                />

                            </fieldset>

                            <fieldset>
                                <p className="text-xs lg:text-sm font-semibold">Termos de uso e privacidade</p>
                                <div className="flex  gap-4 mt-5">
                                    <Field
                                        name="terms"
                                        type="checkbox"
                                        checked={values.terms}
                                        className="w-6 h-6"
                                    />
                                    <div className="text-xs lg:text-sm">
                                        <p className="font-medium">
                                            Ao clicar neste botão, eu concordo com os termos de uso e privacidade da nossa empresa.
                                        </p>
                                        <p className="mt-2 text-xs lg:text-sm font-medium text-blue-500 hover:brightness-75">
                                            <a href="/">Termos de uso e Privacidade</a>
                                        </p>
                                    </div>
                                </div>
                                {errors && errors.terms && (
                                    <span className="text-xs text-red-500">{errors.terms}</span>
                                )}
                            </fieldset>

                            <div className="w-[267px] mx-auto flex flex-col items-center gap-6 lg:gap-8 justify-center mt-8  lg:mt-12 mb-10 lg:mb-0">
                                <Button
                                    type="submit"
                                    title="Cadastrar"
                                />

                                <div className="flex items-center gap-10">
                                    <p className="text-gray-200 font-medium">
                                        Já tem uma conta?
                                    </p>
                                    <Link
                                        to="/"
                                        className="text-blue-500 font-medium"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}