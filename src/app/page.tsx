import Link from 'next/link';
import Whitelogo from './_Components/Whitelogo';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute top-5 left-5">
        <Whitelogo />
      </div>
      <main className="text-black text-2xl font-bold flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Morlabs Protocol is in development...
        <Link href="https://t.me/+h3znet1BenA4OWI0">
          <button style={{ backgroundColor: 'blue', color: 'white' }} className='green-button flex justify-center items-center'>
            Join telegram
          </button>
        </Link>
        <div>
          <Link href='/welcome'>
            <button className='green-button flex justify-center items-center'>
              Start unboarding
            </button>
          </Link>

        </div>
      </main>
    </div>
  );
}
