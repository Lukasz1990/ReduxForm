import Link from 'next/link'
import styled from 'styled-components'

const S = {
  Link: styled.a`
    margin-right: 15px;
    cursor: pointer;
  `
}

const Header = () => (
  <div>
    <Link href='/'>
      <S.Link>Home</S.Link>
    </Link>
    <Link href='/UserForm'>
      <S.Link>User Form</S.Link>
    </Link>
    <Link href='/UserInfo'>
      <S.Link>User Info</S.Link>
    </Link>
    <Link href='/UserDetails'>
      <S.Link>UserDetails</S.Link>
    </Link>
  </div>
)

export default Header