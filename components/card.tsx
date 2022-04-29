import Link from 'next/link';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpeg';

interface ICard {
  title: string;
  desc: string;
}

function Card({ title, desc }: ICard): JSX.Element {
  return (
    <a href='/' className='px-6 py-5 hover:bg-[#64646426] rounded-xl flex gap-8'>
      <Image src={headshot} alt='A picture of me!' width={64} height={64} />
      <div>
        <h2>{title}</h2>
        <p className='text-neutral-400'>{desc}</p>
      </div>
    </a>
  );
}

export default Card;
