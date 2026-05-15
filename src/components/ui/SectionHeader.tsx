import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
    align?: 'left' | 'center';
}

export default function SectionHeader({
    title,
    description,
    className,
    align = 'left',
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                'mb-10 md:mb-14',
                align === 'center' && 'mx-auto max-w-2xl text-center',
                className,
            )}
        >
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.08] text-[var(--text)] [letter-spacing:0] [text-wrap:balance] md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className={cn('mt-4 max-w-xl text-base leading-7 text-[var(--text-2)]', align === 'center' && 'mx-auto')}>
                    {description}
                </p>
            )}
        </div>
    );
}
