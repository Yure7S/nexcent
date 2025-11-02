import Image from 'next/image';
import { Button } from './components/ui/primary-buttom';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-silver w-full">
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
      <section className='py-10'>
        <h2 className='text-headline-3 md:text-headline-2 font-semibold text-d-grey text-center mb-2'>Our Clients</h2>
        <p className='text-n-grey body-2 text-center mb-10'>We have been working with some Fortune 500+ clients</p>
        <div>
          <ul className='flex gap-[136px] items-center justify-items-center w-fit mx-auto'>
            <li><Link href="/">
              <Image
                src="/images/clients/client-01.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
            <li><Link href="/">
              <Image
                src="/images/clients/client-02.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
            <li><Link href="/">
              <Image
                src="/images/clients/client-03.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
            <li><Link href="/">
              <Image
                src="/images/clients/client-04.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
            <li><Link href="/">
              <Image
                src="/images/clients/client-05.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
            <li><Link href="/">
              <Image
                src="/images/clients/client-06.png"
                alt="Nexcent"
                width={48}
                height={48}
                priority
              />
            </Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}