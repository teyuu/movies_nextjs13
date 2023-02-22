import Link from "next/link"
import Image from "next/image"

export default function Movies({title, id, poster_path, release_date}){
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return(
        <div>
            <h1>{title}</h1>
            <h2>Realeased date</h2>
            <Link href={`/movie/${id}`}>
            <Image
            src={imagePath+poster_path}
            width={800}
            height={800}
            alt={'poster'}
            />
            </Link>
        </div>
    )
}