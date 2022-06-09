import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import {ComponentsList} from './components/ComponentsList';

const Layout = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: auto 1fr;
`;

const NavSidebar = styled.div`
  width: 240px;
  background-color: #fafafa;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
`;

const App = () => {
  return (
    <Layout>
      <NavSidebar>
        <ComponentsList />
      </NavSidebar>
      <Outlet />
    </Layout>
  );
};

export default App;
