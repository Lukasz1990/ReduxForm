import Header from './Header'
import styled from 'styled-components'

const S = {
  Layout: styled.div`
    margin: 20px;
    padding: 80px;
    border: 1px solid #DDD;
  `
}

const Layout = ({ children }) => (
  <S.Layout>
    <Header />
    {children}
  </S.Layout>
)

export default Layout