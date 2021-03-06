import React from 'react';

import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
  `

const Layout = ({children}) => {
    return (
        <>
            <StyledLayout>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </StyledLayout>
        </>
    )
}
export default Layout;
