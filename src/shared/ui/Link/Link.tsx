import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

// Исключаем дублирующиеся и конфликтующие пропсы
type CombinedLinkProps = Omit<MuiLinkProps, 'href'> & NextLinkProps;

const Link = React.forwardRef<HTMLAnchorElement, CombinedLinkProps>(
  (
    {
      href,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      // Извлекаем MUI-специфичные пропсы
      underline,
      variant,
      color,
      ...rest
    },
    ref
  ) => {
    return (
      <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        passHref
        legacyBehavior
      >
        <MuiLink
          ref={ref}
          underline={underline || 'hover'}
          variant={variant}
          color={color}
          {...rest}
        />
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
