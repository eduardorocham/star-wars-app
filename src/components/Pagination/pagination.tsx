import { useState } from 'react';
import './pagination.css';

type Props = {
    nextPage: () => void;
}

export const Pagination = ({nextPage}:Props) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentpage, setCurrentPages] = useState(0);
    const pages = Math.ceil(87 / itemsPerPage);

    return (
        <div className='pagination'>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button className='button_pagination' onClick={nextPage}>
                        {index}
                    </button>
                )
            })}
        </div>
    )
}