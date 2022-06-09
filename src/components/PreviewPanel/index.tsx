import styled from 'styled-components';

export const PreviewPanel = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

export const PreviewPanelHeader = styled.div`
  padding: 16px;
  background-color: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0px 0px 10px 4px #f0f0f0;
`;

export const PreviewPanelContent = styled.div`
  padding: 16px;
`;
