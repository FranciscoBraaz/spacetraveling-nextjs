import Image from 'next/image';
import React from 'react';
import { Autor, Container, DataPost } from './styles';

export function CardPost() {
  return (
    <Container>
      <h2>Como utilizar hooks</h2>
      <p>Pensando em sicronização, invés de ciclos de vida</p>
      <div>
        <DataPost>
          <Image
            src="/images/calendar.svg"
            alt="Calendário"
            width={14}
            height={14}
          />
          15 Mar 2021
        </DataPost>
        <Autor>
          <Image src="/images/user.svg" alt="Autor" width={14} height={14} />
          Joseph Oliveira
        </Autor>
      </div>
    </Container>
  );
}
