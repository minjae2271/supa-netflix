import { getMovie } from "actions/movieAction";
import Ui from "./ui";

export async function generateMetadata({ params }) {
    const movie = await getMovie(params.id)

    return {
        title: movie.title,
        description: movie.overview,
        openGraph: {
            images: [movie.image_url]
        }
    }
}

export default async function MovieDetail({ params }) {
    const movie = await getMovie(params.id)

    return (
        <main className="py-16 flex items-center w-full absolute top-0 bottom-0 left-0 right-0">
            {movie ? <Ui movie={movie}/> : <div>movie doesn't exist</div>}
            
        </main>
    )
}