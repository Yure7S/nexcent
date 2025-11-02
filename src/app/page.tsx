import Image from 'next/image';
import { Button } from './components/ui/primary-buttom';

export default function Home() {
  return (
    <section className=" bg-silver w-full">
      <div className="max-w-container mx-auto px-10 sm:px-14 py-24 flex items-center gap-28">
        <div>
          <h2 className="text-headline-2 md:text-headline-1 leading-headline-2 md:leading-headline-1 font-semibold line text-d-grey">Lessons and insights <span className="text-primary">from 8 years</span></h2>
          <p className='mt-3 body-2 text-n-grey sm:mt-4'>Where to grow your business as a photographer: site or social media?</p>
          <Button className='mt-8'>
            Register
          </Button>
        </div>
        <div className='hidden lg:block'>
          <Image
            src="/images/ilustration-01.png"
            alt="Nexcent"
            width={391}
            height={407}
            className="h-[407px] min-w-[391px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}