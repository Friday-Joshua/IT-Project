'use client'

import Spacer from "@/app/components/spacer";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { useRef, useEffect, useState } from "react";

export default function SearchFilter({ onFilter: [filter, setFilter] }: { onFilter: [string, React.Dispatch<React.SetStateAction<string>>] }) {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const filterListRef = useRef<HTMLUListElement>();
    const filterScrimRef = useRef<HTMLElement>();
    const filterContainer = useRef<HTMLDivElement>();

    function closeFilter() {
        filterContainer.current.classList.toggle('slideDown');
        filterScrimRef.current.classList.toggle('hidden');
    }
    useEffect(() => {
        filterListRef.current.addEventListener('click', e => {
            const selected = ((e.target) as HTMLElement);
            if (selected.nodeName === 'LI') {
                setFilter(selected.dataset.filter);
                return
            } else return
        })
    });

    return (
        <section id="filterScrim" className={`z-40 fixed inset-0 overlay hidden`} ref={filterScrimRef}>
            <div id="filterContainer" className={`absolute bottom-0 left-0 right-0 h-fit bg-secondary p-5 rounded-tl-2xl  rounded-tr-2xl ${showFilter ? `showFilter` : `hideFilter`}`} ref={filterContainer}>
                <h6 className="text-h6 text-b-800 mb-4">Sort by</h6>
                <ul className="list-none divide-y" ref={filterListRef}>
                    <li data-filter="all" className={`${filter === 'all' ?`font-bold text-accent`:``} py-4 flex justify-between items-center`}>All
                        {filter === 'all' && <Check size={24} weight="regular" className="text-accent rounded-full" />}
                    </li>
                    <li data-filter="date" className={`${filter === 'date'? `font-bold text-accent`:``} py-4 flex justify-between items-center`}>Date
                        {filter === 'date' && <Check size={24} weight="regular" className="text-accent rounded-full" />}
                    </li>
                    <li data-filter="price" className={`${filter === 'price'? `font-bold text-accent`:``} py-4 flex justify-between items-center`}>Price
                        {filter === 'price' && <Check size={24} weight="regular" className="text-accent rounded-full" />}
                    </li>
                    <li data-filter="popularity" className={`${filter === 'popularity' ?`font-bold text-accent`:``} py-4 flex justify-between items-center`}>Popularity
                        {filter === 'popularity' && <Check size={24} weight="regular" className="text-accent rounded-full" />}
                    </li>
                    <li data-filter="relevance" className={`${filter === 'relevance'? `font-bold text-accent`:``} py-4 flex justify-between items-center`}>Relevance
                        {filter === 'relevance' && <Check size={24} weight="regular" className="text-accent rounded-full" />}
                    </li>
                </ul>
                <Spacer size={4} />
                <button className="mx-auto block text-accent" onClick={() => {
                    filterContainer.current.classList.toggle('slideDown');
                    filterScrimRef.current.classList.toggle('hidden');
                }}
                >Close</button>
            </div>
        </section>
    )
}