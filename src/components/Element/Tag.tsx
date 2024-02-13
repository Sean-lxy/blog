import Link, { LinkProps } from 'next/link';
import { cx } from '@/src/utils';

const Tag: React.FC<
  LinkProps & {
    name: string;
    className?: string;
  }
> = ({ href = '#', name, ...props }) => {
  const { className = '' } = props;

  return (
    <Link
      href={href}
      className={cx(
        'ease inline-block rounded-full border border-solid border-light bg-dark px-10 py-3 font-semibold capitalize text-light transition-all duration-200 hover:scale-105',
        className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
