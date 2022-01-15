import Image from 'next/image';
import React from 'react';
import { Container, HeaderStyle } from './styles';

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Image
          src="/images/logo.svg"
          alt="Spacetraveling"
          width={310}
          height={30}
        />
      </Container>
    </HeaderStyle>
  );
}
