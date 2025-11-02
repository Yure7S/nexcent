import Image from 'next/image';

interface StatsCardProps {
    iconSrc: string;
    iconAlt: string;
    value: string;
    label: string;
    className?: string;
}

export function StatsCard({
    iconSrc,
    iconAlt,
    value,
    label,
    className = ""
}: StatsCardProps) {
    return (
        <div className={`flex items-center w-[255px] ${className}`}>
            <Image
                src={iconSrc}
                alt={iconAlt}
                width={48}
                height={48}
                className="h-12 mr-4 -translate-x-1.5"
                priority
            />
            <div className=''>
                <h3 className="text-headline-3 text-d-grey leading-headline-3 font-semibold text-d-">
                    {value}
                </h3>

                <div className="body-2 text-left text-n-grey dark:text-l-grey">
                    {label}
                </div>
            </div>
        </div>
    );
}