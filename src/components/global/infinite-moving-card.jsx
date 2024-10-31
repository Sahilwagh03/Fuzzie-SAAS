import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const scrollAmount = speed === 'fast' ? 10 : speed === 'normal' ? 5 : 2;

  return (
    <div
      className={cn(
        'scroller max-w-[100%] relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <marquee
        className={cn(
          'flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        direction={direction}
        style={{ scrollAmount }} // Set scrollAmount as an inline style
      >
        <div className='flex flex-row gap-16'>
          {items.map((item, idx) => (
            <Image
              key={item.href}
              width={170}
              height={170}
              src={item.href}
              alt={item.href}
              className="relative w-full h-[50px] rounded-2xl object-contain opacity-50"
            />
          ))}
        </div>
      </marquee>
    </div>
  );
};
