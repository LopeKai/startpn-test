import { useState } from 'react'

import { CiSearch } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../Form/Button';
import { ModalNewOccurrence } from '../ModalNewOccurrence';

export const Search = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [isNewOccurrenceModalOpen, setIsNewOccurrencenModalOpen] = useState(false)

    function handleOPenNewOccurrenceModal() {
        setIsNewOccurrencenModalOpen(true)
    }

    function handleCloseNewOccurrenceModal() {
        setIsNewOccurrencenModalOpen(false)
    }

    const handleDeleteItems = () => {
        setSearch('');
        setItems([]);
    };

    return (
        <section className="w-full flex items-center justify-between">
            <div className="hidden lg:flex items-center h-12 w-[30px] lg:w-[331px] rounded-full lg:px-5 ">
                <div
                    className={`${items.length > 0 ? 'rounded-t-md ' : 'rounded-md'
                        } w-full flex items-center relative`}
                >
                    <CiSearch
                        className="absolute left-2 md:w-6 md:h-6 w-5 h-5 text-color md:mr-4 mr-3 text-blue-500 "
                    />

                    <input
                        type="text"
                        name="search"
                        placeholder="Pesquisar"
                        className=" h-12 w-[331px] pl-10 focus:outline-none rounded-full text-gray-500 text-base "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    // onClick={() => getProducts(cityId, idCompany)}
                    />

                    <button
                        className={items.length > 0 ? 'block' : 'hidden'}
                        onClick={handleDeleteItems}
                    >
                        <AiOutlineClose size={18} className="opacity-70" />
                    </button>

                    {
                        items.length == 0
                            ?
                            <ul className={` ${search.length > 0 ? 'block' : 'hidden'}
                                absolute z-[35] mt-3 left-0 md:top-10 top-9 bg-white drop-shadow-xl w-full py-4 md:px-8 px-4 rounded-md`}
                            >
                                <li className="text-center text-red">
                                    Não encontrado.
                                </li>

                            </ul>
                            :
                            (loading ? (
                                <ul className="absolute scroll-smooth z-[35] left-0 md:top-10 top-9 bg-white drop-shadow-2xl w-full py-4 md:px-8 px-4 pb-8  rounded-b-md">
                                    {items.map((item: any) => {
                                        return (
                                            <li
                                                key={item.id}
                                                className="my-6 hover:bg-gray-50 p-3 cursor-pointer border-b "
                                            >
                                                <a
                                                    href="/"
                                                >
                                                    <div className="flex items-center gap-10 ">
                                                        <picture>
                                                            <source
                                                                srcSet={`https://dashboard-acelera.s3.sa-east-1.amazonaws.com/products/${item?.product?.image || item.image}`}
                                                                type="image/png"
                                                            />
                                                            <img
                                                                src={`https://dashboard-acelera.s3.sa-east-1.amazonaws.com/products/${item?.product?.image || item.image}`}
                                                                alt={item?.product?.name || item.name}
                                                                className="flex-1 max-w-[80px] min-w-[80px] h-[80px] object-cover rounded"
                                                            />
                                                        </picture>
                                                        <div className="flex items-center justify-between  w-full">
                                                            <p className="lg:text-lg">{item?.product?.name || item.name}</p>
                                                            <span className="text-base text-[#0033c6] font-semibold">
                                                                {new Intl.NumberFormat('pt-BR', {
                                                                    style: 'currency',
                                                                    currency: 'BRL',
                                                                }).format(item?.product?.price || item.price)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                <ul className="absolute z-[35]  left-0 md:top-10 top-9 bg-white drop-shadow-2xl w-full py-4 md:px-8 px-4  rounded-b-md">
                                    {items.map((item: any) => (
                                        <li
                                            key={item.id}
                                            className="my-6 hover:bg-gray-50 p-3 cursor-pointer animate-pulse"
                                        >
                                            <div className="flex items-center  gap-10 ">
                                                <div className="flex-1 max-w-[80px] min-w-[80px] h-[80px] rounded bg-gray-100"></div>

                                                <div className="w-full bg-gray-100 p-2 "></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ))
                    }
                </div>
            </div >

            <div className="w-full lg:w-[180px]">
                <Button
                    title='Nova ocorrência'
                    onClick={handleOPenNewOccurrenceModal}
                />
            </div>

            <ModalNewOccurrence
                isOpen={isNewOccurrenceModalOpen}
                onRequestClose={handleCloseNewOccurrenceModal}
            />

        </section>
    )
}