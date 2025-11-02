// components/sections/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
   return (
      <footer className="bg-shade-5 border-t lg:max-h-[328px] border-grey-blue dark:border-l-grey">
         <div className="max-w-7xl mx-auto px-14 py-12 pb-12">
            <div className="flex flex-wrap  md:flex-nowrap justify-start md:justify-between gap-8">

               <div className="space-y-6 w-full md:w-auto lg:w-full md:max-w-[350px]">
                  <div className="flex items-center gap-2">
                     <Image
                        src="/svg/logo-white.svg"
                        alt="Nexcent"
                        width={120}
                        height={32}
                        className="hidden dark:block"
                     />
                  </div>
                  <div className="space-y-2">
                     <p className="body-3 text-n-grey dark:text-l-grey">
                        Copyright © 2020 Nexcent Rd.
                     </p>
                     <p className="body-3 text-n-grey dark:text-l-grey">
                        All rights reserved
                     </p>
                  </div>
                  <div className='flex gap-4'>
                     <div className='p-2 bg-white/10 rounded-[50%] bg-opacity-10'>
                        <Image
                           src="/svg/icons/social-icon-01.svg"
                           alt="Social icon"
                           width={17}
                           height={17}
                           className="hidden dark:block"
                        />
                     </div>
                     <div className='p-2 bg-white/10 rounded-[50%] bg-opacity-10'>
                        <Image
                           src="/svg/icons/social-icon-02.svg"
                           alt="Social icon"
                           width={17}
                           height={17}
                           className="hidden dark:block"
                        />
                     </div>
                     <div className='p-2 bg-white/10 rounded-[50%] bg-opacity-10'>
                        <Image
                           src="/svg/icons/social-icon-03.svg"
                           alt="Social icon"
                           width={17}
                           height={17}
                           className="hidden dark:block"
                        />
                     </div>
                     <div className='p-2 bg-white/10 rounded-[50%] bg-opacity-10'>
                        <Image
                           src="/svg/icons/social-icon-04.svg"
                           alt="Social icon"
                           width={17}
                           height={17}
                           className="hidden dark:block"
                        />
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="body-1-medium text-d-grey dark:text-white mb-6">
                     Company
                  </h3>
                  <ul className="space-y-3">
                     {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item) => (
                        <li key={item}>
                           <Link
                              href="#"
                              className="body-3 text-n-grey dark:text-l-grey hover:text-primary dark:hover:text-primary transition-colors"
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h3 className="body-1-medium text-d-grey dark:text-white mb-6">
                     Support
                  </h3>
                  <ul className="space-y-3">
                     {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item) => (
                        <li key={item}>
                           <Link
                              href="#"
                              className="body-3 text-n-grey dark:text-l-grey hover:text-primary dark:hover:text-primary transition-colors"
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="space-y-6">
                  <h3 className="body-1-medium text-d-grey dark:text-white">
                     Stay up to date
                  </h3>
                  <div className="relative">
                     <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-[9px] pr-12 body-3 text-white bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-300"
                     />
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <Image
                           src="/svg/icons/send-message-icon.svg"
                           alt="Enviar mensagem"
                           width={17}
                           height={17}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}