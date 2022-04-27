import Link from 'next/link';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpeg';

function Card(): JSX.Element {
  return (
    <div className='p-4'>
      <Image src={headshot} alt='A picture of me!' width={30} height={30} />
      <h2>Project Name</h2>
      <p>Project Description</p>
    </div>
  );
}

export default Card;
