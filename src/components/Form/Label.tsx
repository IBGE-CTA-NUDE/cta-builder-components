import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  column?: boolean;
}

const LabelContainer = styled.label`
  display: flex;
  &.row { flex-flow: row nowrap; }
  &.column { flex-flow: column nowrap; }
`;

const Content = styled.div`
  display: flex;
  padding: 5px;

  &:empty {
    padding: 0;
  }
`;

const FormItem: React.FC<LabelProps> = ({label, column = false, children}): React.ReactElement => {
  return (
    <LabelContainer className={column ? 'column' : 'row'}>
      <Content>
        { label }
      </Content>
      <Content>
        { children }
      </Content>
    </LabelContainer>
  );
};

export {FormItem};
