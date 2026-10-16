import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/data/movies';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
      <Image
        src={movie.image}
        alt={movie.title}
        width={250}
        height={360}
      />
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.year} · {movie.genre}
        </p>

        <Link href={`/movies/${movie.id}`}>
          상세 정보 →
        </Link>
      </div>
    </article>
  );
}