import React from 'react';
import styled from 'styled-components';

const PAGE_TITLE = 'Componentes | CTA | IBGE | v0.0.1';

const PageDiv = styled.div`
  display: grid;
  grid-template-areas: "preview form" "examples form";
  grid-template-rows: auto  auto;
  grid-template-columns: 1fr 240px;
`;

export const PageSidebar = styled.aside`
  grid-area: form;
  min-height: 0;
  height: 100%;
  background-color: #fafafa;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
`;

export const PagePreview = styled.main`
  grid-area: preview;
  min-height: 0;
  padding: 16px;
`;

export const PageExamples = styled.div`
  grid-area: examples;
  min-height: 0;
  padding: 16px;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({title, children}) => {
  React.useEffect(() => {
    if (typeof globalThis.document === 'undefined') {
      return;
    }
    globalThis.document.title = [title, PAGE_TITLE].filter(Boolean).join(' | ');
  }, []);

  return (
    <PageDiv>
      {children}
    </PageDiv>
  );
};
