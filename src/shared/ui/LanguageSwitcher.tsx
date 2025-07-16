import { useRouter } from 'next/router';
import Link from 'next/link';

export const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {locales?.map(lng => (
        <Link key={lng} href={asPath} locale={lng}>
          <button disabled={lng === locale}>{lng.toUpperCase()}</button>
        </Link>
      ))}
    </div>
  );
};
