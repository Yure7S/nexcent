'use client';

import Image from 'next/image';

const clients = [
    { src: "/images/client-01.png", alt: "Client 1", darkClass: "dark:brightness-0 dark:invert dark:opacity-80" },
    { src: "/images/client-02.png", alt: "Client 2", darkClass: "dark:brightness-0 dark:invert dark:opacity-80" },
    { src: "/images/client-03.png", alt: "Client 3", darkClass: "" },
    { src: "/images/client-04.png", alt: "Client 4", darkClass: "dark:brightness-0 dark:invert dark:opacity-80" },
    { src: "/images/client-05.png", alt: "Client 5", darkClass: "dark:brightness-0 dark:invert dark:opacity-80" },
    { src: "/images/client-06.png", alt: "Client 6", darkClass: "dark:brightness-0 dark:invert dark:opacity-80" },
];

export function ClientsSection() {
    const infiniteClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-10 px-3.5">
            <h2 className="text-headline-3 md:text-headline-2 font-semibold text-d-grey text-center mb-2">
                Our Clients
            </h2>
            <p className="text-n-grey body-2 text-center mb-10">
                We have been working with some Fortune 500+ clients
            </p>

            <div className="relative overflow-hidden max-w-container mx-auto">
                <div className="flex">
                    <div className="flex gap-20 sm:gap-[136px] items-center animate-scroll-infinite">
                        {infiniteClients.map((client, index) => (
                            <div key={index} className="shrink-0">
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    width={48}
                                    height={48}
                                    className={`
                                        transition-all duration-300
                                        hover:opacity-100
                                        ${client.darkClass}
                                    `}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent pointer-events-none" />
            </div>
        </section>
    );
}