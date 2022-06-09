import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px;
`;

interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ColumnHeader: React.FC<Props> = ({style, children}): React.ReactElement => {
  return (
    <Container style={style ?? {}}>
      {children}
    </Container>
  );
};

export {ColumnHeader};
