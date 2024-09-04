'use client'

import { Spinner } from "@material-tailwind/react";
import MovieCard from "./movieCard"
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "actions/movieAction";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieList() {
    const search = useRecoilValue(searchState)
    
    const getAllMoviesQuery = useQuery({
        queryKey: ['movie', search],
        queryFn: () => searchMovies(search)
    })


    return (
        <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
            { getAllMoviesQuery.isPending && <Spinner />}
            { getAllMoviesQuery.data &&
                getAllMoviesQuery.data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }

        </div>
    )
}