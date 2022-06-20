import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

interface LabelProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  column?: boolean;
  inputFirst?: boolean;
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

const FormItem: React.FC<LabelProps> = ({
  label,
  column = false,
  inputFirst = false,
  children,
}): React.ReactElement => {
  const first = inputFirst ? children : label;
  const second = inputFirst ? label : children;

  return (
    <LabelContainer className={cn({
      'row': !column,
      'column': column,
    })}>
      <Content>
        { first }
      </Content>
      <Content>
        { second }
      </Content>
    </LabelContainer>
  );
};

export {FormItem};
