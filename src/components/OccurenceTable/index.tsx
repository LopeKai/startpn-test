import { useState, useEffect } from 'react'
import { Api } from "../../helpers/Api"
import dayjs from 'dayjs'

const transactions = [
    {
        id: 1,
        name: 'Erro de cobrança na futura',
        origin: 'Reclama do cliente',
        data: '15/11/2023',
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
            <table className="w-full">
                <thead className="w-full h-[55px] rounded-[10px]">
                    <tr>
                        <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Título</th>
                        <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Origem</th>
                        <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Data</th>
                        <th className="text-gray-150 font-medium py-[1rem] px-[2rem] text-left">Status</th>
                    </tr>
                </thead>

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
                                    ${transaction.status === 'finalizado' && 'bg-green'}
                                    ${transaction.status === 'Em investigação' && 'bg-[#F7BB17]'}
                                    text-sm flex items-center justify-center mt-5 py-[1rem]  w-[142px] h-[32px] text-center text-white rounded-[60px]
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
    )
}