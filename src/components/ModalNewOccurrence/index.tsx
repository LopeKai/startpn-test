import Modal from 'react-modal'

import { GrFormClose } from 'react-icons/gr'
import { Form, Formik, FormikValues } from 'formik'
import { InputModal } from './InputModal'
import { SelectModal } from './SelectModal'

import * as yup from 'yup';
import { Api } from '../../helpers/Api'
import { toast } from 'react-toastify'

interface ModalNewOccurrence {
    isOpen: boolean,
    onRequestClose: () => void
}

const listOrigem = [
    {
        id: 1,
        name: 'Reclamação do cliente',
        value: 'reclamaçao',

    },
    {
        id: 2,
        name: 'Auditoria interna',
        value: 'auditoria interna',

    },
    {
        id: 3,
        name: 'Auditoria externa',
        value: 'auditoria externa',

    }
]

const listStatus = [
    {
        id: 1,
        name: 'Finalizado',
        value: 'Finalizado',

    },
    {
        id: 2,
        name: 'Em investigação',
        value: 'Em investigação',

    },
]

export const ModalNewOccurrence = ({ isOpen, onRequestClose }: ModalNewOccurrence) => {

    const validationSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        origin: yup.string().required('Campo obrigatório'),
        status: yup.string().required('Campo obrigatório'),

    });

    const handleNewOccurence = async (values: FormikValues) => {
        const { name, origin, status } = values

        await Api.AddOccurrence({
            name,
            origin,
            status
        })
            .then(result => {
                toast.success('Ocorrência cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch((error) => {
                if (error.response.data.message === 'E-mail e/ou senha incorreta') {
                    toast.error('Ocorreu um erro!', {
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
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h2 className="mb-4 text-2xl font-medium text-blue-500">Cadastrar nova ocorrência</h2>

            <button
                title="Fechar"
                className="react-modal-close"
                type="button"
                onClick={onRequestClose}
            >
                <GrFormClose className="w-8 h-8" />
            </button>

            <Formik
                initialValues={{
                    name: '',
                    origin: '',
                    status: '',
                }}
                validateOnBlur={false}
                validateOnChange={false}
                validationSchema={validationSchema}
                onSubmit={(values) => handleNewOccurence(values)}
            >
                {({ errors }) => (
                    <Form>
                        <fieldset>
                            <InputModal
                                label='Nome'
                                name='name'
                                placeholder='Digite nome da ocorrência'
                                error={errors.name}
                            />
                        </fieldset>

                        <fieldset>
                            <SelectModal
                                name="origin"
                                label="Origem:"
                                error={errors.origin}
                            >
                                {
                                    listOrigem.map(
                                        (option: { id: number; name: string; value: string }) => (
                                            <option key={option.id} value={option.value}>
                                                {option.name}
                                            </option>
                                        )
                                    )
                                }
                            </SelectModal>
                        </fieldset>

                        <fieldset className="mt-4">
                            <SelectModal
                                name="status"
                                label="Status:"
                                error={errors.status}
                            >
                                {
                                    listStatus.map(
                                        (option: { id: number; name: string; value: string }) => (
                                            <option key={option.id} value={option.value}>
                                                {option.name}
                                            </option>
                                        )
                                    )
                                }
                            </SelectModal>
                        </fieldset>

                        <button
                            type='submit'
                            className="w-full h-12 bg-green mt-10 rounded-full text-white text-lg font-medium ease-out duration-300 hover:brightness-75"
                        >
                            Cadastrar
                        </button>

                    </Form>
                )}
            </Formik>

        </Modal>
    )
}