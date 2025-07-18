// src/components/common/Link.tsx
import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

type Props = MuiLinkProps & NextLinkProps;

const Link = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href, as, replace, scroll, shallow, prefetch, locale, ...rest } = props;

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
      <MuiLink ref={ref} {...rest} />
    </NextLink>
  );
});

Link.displayName = 'Link';
export default Link;
