'use client'

import { useRecoilState } from "recoil"
import { searchState } from "utils/recoil/atoms"
import Logo from "./logo"

export default function Header() {
    const [search, setSearch] = useRecoilState(searchState)

    return (
        <header className="z-50 flex items-center justify-center fixed top-0 left-0 right-0 px-4 py-2 bg-gray-900">
            <nav className="flex gap-4">
                <Logo />
                <ul className="flex gap-2 text-white">
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>
            <div className="flex gap-2 w-full max-w-72 items-center border border-white text-white rounded-md p-2">
                <i className="fas fa-search"></i>
                <input type="text" className=" bg-transparent" value={search} onChange={(e) => setSearch(e.target.value) } placeholder="Search Movie"/>

            </div>
        </header>
    )
}