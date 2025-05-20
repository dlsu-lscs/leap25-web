import { ReactNode, MouseEvent, JSX } from 'react';
import Link, { LinkProps } from 'next/link';
import sleep from '@/lib/sleep';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className: string;
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps): JSX.Element {
  const router = useRouter();

  const handleTransition = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const leftCloud = document.querySelector('.left-cloud');
    const rightCloud = document.querySelector('.right-cloud');

    leftCloud?.classList.add('left-cloud-inout');
    rightCloud?.classList.add('right-cloud-inout');
    await sleep(800);
    router.push(typeof href === 'string' ? href : href.toString());
    await sleep(1600);
    leftCloud?.classList.remove('left-cloud-inout');
    rightCloud?.classList.remove('right-cloud-inout');
  };

  return (
    <Link onClick={handleTransition} className={className} href={href} {...props}>
      {children}
    </Link>
  );
}
