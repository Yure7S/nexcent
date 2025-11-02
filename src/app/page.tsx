import Image from 'next/image';
import { Button } from './components/ui/primary-buttom';
import Link from 'next/link';
import { ButtonSize } from '@/enums/buttom.enum';
import { StatsCard } from './components/ui/stats-card';
import { ClientsSection } from './components/section/clients-section';

export default function Home() {
  return (
    <>
      <section className="bg-silver w-full">
        <div className="max-w-container mx-auto px-10 sm:px-14 py-24 flex items-center gap-28">
          <div>
            <h2 className="text-headline-2 md:text-headline-1 leading-headline-2 md:leading-headline-1 font-semibold text-d-grey">Lessons and insights <span className="text-primary">from 8 years</span></h2>
            <p className='mt-3 body-2 text-n-grey sm:mt-4'>Where to grow your business as a photographer: site or social media?</p>
            <Button className='mt-8'>
              Register
            </Button>
          </div>
          <div className='hidden lg:block'>
            <Image
              src="/images/ilustration-01.png"
              alt="Ilustration"
              width={391}
              height={407}
              className="h-[407px] min-w-[391px]"
              priority
            />
          </div>
        </div>
      </section>
      <ClientsSection/>
      <section className='px-3.5'>
        <h2 className='max-w-[550px] mx-auto leading-headline-2 text-headline-3 md:text-headline-2 font-semibold text-d-grey text-center mb-2'>Manage your entire community in a single system</h2>
        <p className='text-n-grey body-2 text-center mb-4'>Who is Nextcent suitable for?</p>
        <div className='flex gap-9 gap-y-11 justify-center lg:justify-between items-center mx-auto max-w-6xl flex-wrap w-full'>
          <div className='shadow-2px p-6 h-[260px] rounded-lg max-w-[299px]'>
            <div className="relative w-fit mx-auto after:-z-10 after:absolute after:content-[''] after:block after:w-[50px] after:h-[50px] after:bg-tint-5 after:-top-2 after:left-1.5 after:rounded-[18px_5px_10px_5px]">
              <Image
                src="/svg/icons/card-icon-01.svg"
                alt="Group icon"
                width={48}
                height={48}
                className="h-6 w-auto mt-5 mb-[30px] -translate-x-1.5"
                priority
              />
            </div>
            <h3 className=" leading-headline-3 text-headline-4 md:text-headline-3 font-semibold text-d-grey text-center mb-2">Membership Organisations</h3>
            <p className='text-n-grey body-3 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='shadow-2px min-h-[280px] p-6 rounded-lg max-w-[299px]'>
            <div className="relative w-fit mx-auto after:-z-10 after:absolute after:content-[''] after:block after:w-[50px] after:h-[50px] after:bg-tint-5 after:-top-2 after:left-1.5 after:rounded-[18px_5px_10px_5px]">
              <Image
                src="/svg/icons/card-icon-02.svg"
                alt="Group icon"
                width={48}
                height={48}
                className="h-8 w-auto mt-5 mb-[30px] -translate-x-1.5"
                priority
              />
            </div>
            <h3 className=" leading-headline-3 text-headline-4 md:text-headline-3 font-semibold text-d-grey text-center mb-2">National Associations</h3>
            <p className='text-n-grey body-3 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='shadow-2px p-6 h-[260px] rounded-lg max-w-[299px]'>
            <div className="relative w-fit mx-auto after:-z-10 after:absolute after:content-[''] after:block after:w-[50px] after:h-[50px] after:bg-tint-5 after:-top-2 after:left-1.5 after:rounded-[18px_5px_10px_5px]">
              <Image
                src="/svg/icons/card-icon-03.svg"
                alt="Group icon"
                width={48}
                height={48}
                className="h-8 w-auto mt-5 mb-[30px] -translate-x-1.5"
                priority
              />
            </div>
            <h3 className=" leading-headline-3 text-headline-4 md:text-headline-3 font-semibold max-w-44 mx-auto text-d-grey text-center mb-2">Clubs And Groups</h3>
            <p className='text-n-grey body-3 text-center'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </section>
      <section className='px-3.5'>
        <div className="max-w-container mx-auto px-7 lg:px-14 py-24 flex items-center gap-4 lg:gap-12">
          <div className='hidden md:block'>
            <Image
              src="/images/illustration-02.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="min-w-[441px] -mx-10 lg:mx-0"
              priority
            />
          </div>
          <div className='max-w-[600px]'>
            <h2 className="text-headline-3 md:text-headline-2 leading-headline-3 md:leading-headline-2 font-semibold line text-d-grey">The unseen of spending three years at Pixelgrade</h2>
            <p className='mt-3 body-3 text-n-grey sm:mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <Button className='mt-8'>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className='bg-silver py-16 px-3.5'>
        <div className='flex gap-y-7 w-full flex-wrap px-8 lg:px-20 max-w-container mx-auto justify-between items-center'>
          <div className='basis-72 grow'>
            <h2 className="text-headline-3 max-w-[408px] md:text-headline-2 leading-headline-3 md:leading-headline-2 font-semibold line text-d-grey">Helping a local <span className='text-primary'>business reinvent itself</span></h2>
            <p className='mt-2 body-3 text-n-grey'>We reached here with our hard work and dedication</p>
          </div>
          <div className='flex flex-wrap gap-[30px] max-w-[540px]'>
            <StatsCard iconAlt='Icone de pessoas' iconSrc='/svg/icons/stats-icon-01.svg' value='2,245,341' label='Members'></StatsCard>
            <StatsCard iconAlt='Clubes' iconSrc='/svg/icons/card-icon-03.svg' value='46,328' label='Clubs'></StatsCard>
            <StatsCard iconAlt='Icone de pessoas' iconSrc='/svg/icons/stats-icon-02.svg' value='828,867' label='Event Bookings'></StatsCard>
            <StatsCard iconAlt='Icone de pessoas' iconSrc='/svg/icons/stats-icon-03.svg' value='1,926,436' label='Payments'></StatsCard>
          </div>
        </div>
      </section>
      <section className='px-3.5'>
        <div className="max-w-container mx-auto px-7 lg:px-14 py-24 flex items-center gap-4 lg:gap-12">
          <div className='hidden md:block'>
            <Image
              src="/images/illustration-03.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="min-w-[441px] -mx-10 lg:mx-0"
              priority
            />
          </div>
          <div className='max-w-[600px]'>
            <h2 className="text-headline-3 md:text-headline-2 leading-headline-3 md:leading-headline-2 font-semibold line text-d-grey">How to design your site footer like we did</h2>
            <p className='mt-3 body-3 text-n-grey sm:mt-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <Button className='mt-8'>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className='bg-silver px-3.5'>
        <div className="max-w-container mx-auto py-8 flex-col md:flex-row flex items-center gap-4 lg:gap-12">
          <div>
            <Image
              src="/images/image-04.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="min-w-[326px]"
              priority
            />
          </div>
          <div className='max-w-[748px]'>
            <p className='mt-3 body-2 text-n-grey font-medium sm:mt-4 mb-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h4 className='text-primary mb-2 text-headline-4 font-semibold'>Tim Smith</h4>
            <p className='body-2 text-n-grey'>British Dragon Boat Racing Association</p>
            <ul className='flex gap-10 items-center justify-items-center w-fit mt-8'>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-01.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-02.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-03.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-04.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-05.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
              <li><Link href="/">
                <Image
                  src="/images/clients/client-06.png"
                  alt="Client"
                  width={48}
                  height={48}
                  priority
                />
              </Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='pt-12 pb-24 px-3.5'>
        <h2 className='text-headline-3 md:text-headline-2 font-semibold text-d-grey text-center mb-2'>Caring is the new marketing</h2>
        <p className='text-n-grey max-w-[628px] mx-auto body-2 text-center mb-10'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        <div className='flex gap-6 gap-y-11 justify-center items-center mx-auto max-w-6xl flex-wrap w-full'>
          <div className='relative mb-16'>
            <Image
              src="/images/image-01.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="w-full max-w-[368px] z-10"
              priority
            />
            <div className='absolute radius-4 shadow-16px -translate-x-1/2 -translate-y-14 left-1/2 p-4 max-w-[317px] rounded-lg w-full mx-auto -mt-9 z-30 bg-silver'>
              <h4 className='text-headline-4 text-center leading-headline-4 font-semibold text-n-grey mb-4'>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <Button size={ButtonSize.MD}>Readmore</Button>
            </div>
          </div>
          <div className='relative mb-16'>
            <Image
              src="/images/image-02.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="w-full max-w-[368px] z-10"
              priority
            />
            <div className='absolute radius-4 shadow-16px -translate-x-1/2 -translate-y-14 left-1/2 p-4 max-w-[317px] rounded-lg w-full mx-auto -mt-9 z-30 bg-silver'>
              <h4 className='text-headline-4 text-center leading-headline-4 font-semibold text-n-grey mb-4'>What are your safeguarding responsibilities and how can you manage them?</h4>
              <Button size={ButtonSize.MD}>Readmore</Button>
            </div>
          </div>
          <div className='relative mb-16'>
            <Image
              src="/images/image-03.png"
              alt="Nexcent"
              width={391}
              height={407}
              className="w-full max-w-[368px] z-10"
              priority
            />
            <div className='absolute radius-4 shadow-16px -translate-x-1/2 -translate-y-14 left-1/2 p-4 max-w-[317px] rounded-lg w-full mx-auto -mt-9 z-30 bg-silver'>
              <h4 className='text-headline-4 text-center leading-headline-4 font-semibold text-n-grey mb-4'>Revamping the Membership Model with Triathlon Australia</h4>
              <Button size={ButtonSize.MD}>Readmore</Button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-8 w-full bg-silver'>
        <h2 className='max-w-[400px] md:max-w-[887px] mb-8 w-full text-center mx-auto text-headline-2 md:text-headline-1 leading-headline-2 md:leading-headline-1 font-semibold'>Pellentesque suscipit fringilla libero eu.</h2>
        <Button className='mt-8 mx-auto block'>
          Get a Demo
        </Button>
      </section>
    </>
  );
}