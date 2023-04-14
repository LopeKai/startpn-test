import { useState, useEffect } from 'react'
import { Api } from "../../helpers/Api"
import dayjs from 'dayjs'

const transactions = [
    {
        id: 1,
        name: 'Erro de cobrança na futura',
        origin: 'Reclama do cliente',
        created_at: '15/11/2023',
        status: 'finalizado'
    }
]

export const OcurrenceTable = () => {
    const [allOccurence, setAllOccurence] = useState<[]>([])

    console.log(allOccurence)

    const getAllOccurrence = async () => {
        await Api.GetAllOccurrence()
            .then(result => {
                setAllOccurence(result)
            })
            .catch((error) => {

                console.log(error)
            });
    }

    useEffect(() => {
        getAllOccurrence()
    }, [])

    return (
        <div className="mt-10">
            <div className="hidden lg:block">
                <table className="w-full">
                    <thead className="w-full h-[55px] rounded-[10px]">
                        <tr>
                            <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Título</th>
                            <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Origem</th>
                            <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Data</th>
                            <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Status</th>
                        </tr>
                    </thead>


                    {
                        allOccurence.length === 0
                        &&
                        <div className="absolute left-1/2 translate-x-[-20%] top-1/2 text-center">
                            <h1 className="text-xl text-red-500">Sem ocorrência no momento.</h1>
                        </div>
                    }
                    <tbody>

                        {
                            allOccurence &&
                            allOccurence.map((transaction: any) => {
                                return (
                                    <tr
                                        key={transaction.id}
                                        className=" bg-white h-full mt-20 border rounded-md"
                                    >
                                        <td className="py-[1.5rem] px-[2rem] border-0">
                                            {transaction.name}
                                        </td>

                                        <td className="py-[1rem] px-[2rem] border-0">
                                            {transaction.origin}
                                        </td>

                                        <td className="py-[1rem] px-[2rem] border-0">
                                            {dayjs(transaction.created_at).format('DD.MM.YYYY')}
                                        </td>

                                        <td className={`
                                    ${transaction.status === 'Finalizado' && 'bg-green'}
                                    ${transaction.status === 'Em investigação' && 'bg-[#F7BB17]'}
                                    text-sm  border flex items-center justify-center mt-5 py-[1rem]  w-[142px] h-[32px] text-center text-white rounded-[60px]
                                    `}
                                        >
                                            {transaction.status}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                allOccurence &&
                allOccurence.map((transaction: any, index) => (
                    <div
                        key={index}
                        className="lg:hidden w-full h-[197px] border rounded-xl bg-white p-5 mb-4"
                    >
                        <header className="w-full text-center border-b pb-4">
                            <p className="text-sm font-medium text-black-100">{transaction.name}</p>
                        </header>

                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-250">Origem</p>
                                <p className="text-[13px] font-medium text-black-100">{transaction.origin}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-250">Data</p>
                                <p className="text-[13px] font-medium text-black-100">
                                    {dayjs(transaction.created_at).format('DD.MM.YYYY')}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-250">Status</p>

                                <p className={`
                                 ${transaction.status === 'Em investigação' && 'bg-[#F7BB17]'}
                                 ${transaction.status === 'Finalizado' && 'bg-green'}
                                 text-sm flex items-center justify-center w-[139px] h-[30px] text-center text-white rounded-[60px]
                                 
                                `}>
                                    {transaction.status}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}