import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, HeaderStyle } from './styles';

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Link href="/" passHref>
          <Image
            src="/images/logo.svg"
            alt="Spacetraveling"
            width={310}
            height={30}
          />
        </Link>
      </Container>
    </HeaderStyle>
  );
}
