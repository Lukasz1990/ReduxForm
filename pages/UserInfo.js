import { Table } from 'reactstrap'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import Button from '../components/Button'
import Link from 'next/link'

const S = {
  Table: styled(Table)`
  margin: 0 auto;
  width:1000px;
  `,

  Header: styled.thead``,

  HeaderCol: styled.th`
  `,

  Body: styled.tbody``,
  Row: styled.tr``,
  Col: styled.td`
  cursor:pointer;
  `,
  Text: styled.span`
  font-size:13px;
  font-weight:600;
  font-family: 'Arial';
  font-style: normal;
  `
}

const UserInfo = ({ data }) => {
  return (
   <Layout>
    <h1>Users List</h1>
    <S.Table hover>
      {data &&
        <S.Body>
        {data.map(user => (
          <S.Row key={user.userId}>
              <S.Col>
            <S.Text>User details</S.Text>
            <Link href='/UserDetails'>
            <a><Button OnClick={()=>alert('redirection')}>Show details</Button></a>
            </Link>
            </S.Col>
            <S.Col>
              <h5>User email</h5><S.Text>{user.email}</S.Text>
            </S.Col>
            <S.Col>
            <h5>Hero intro</h5><S.Text>{user.hero_intro}</S.Text>
            </S.Col>
            <S.Col>
            <h5>Hero magic</h5><S.Text>{user.hero_magic}</S.Text>
            </S.Col>
            <S.Col>
              <h5>Hero profecy</h5><S.Text>{user.hero_profecy}</S.Text>
            </S.Col>
          </S.Row>
        ))}
        </S.Body>
      }
    </S.Table>
   </Layout>
  )
}

const mapStateToProps = state => ({
  data: state.usersReducer.data,
})



export default connect(
    mapStateToProps,
    {
    }
  )(UserInfo)