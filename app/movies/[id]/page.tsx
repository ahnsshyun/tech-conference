import Image from 'next/image';
import { Gowun_Dodum } from 'next/font/google';
import { movies } from '@/data/movies';
import MovieReviewsButton from '@/components/MovieReviewsButton';

// 과제1 - 폰트 적용 
const gowunDodum = Gowun_Dodum({
  weight: '400',
  subsets: ['latin'],
});


interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <main className={gowunDodum.className}>
      <h1>{movie.title}</h1>
      
      {/*과제2 - 이미지 최적화*/}
      <Image
        src={movie.image}
        alt={movie.title}
        width={300}
        height={450}
      />

      <p>
        {movie.year} · {movie.genre} · {movie.director}
      </p>

      <p style={{ whiteSpace: 'pre-line' }}>{movie.description}</p>

      <MovieReviewsButton />

    </main>
  );
}