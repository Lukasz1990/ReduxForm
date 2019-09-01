import { Table } from 'reactstrap'
import styled from 'styled-components'

const S = {
  Table: styled(Table)`
    margin: 0 auto;
    width:800px;
  `,

  Header: styled.thead``,

  HeaderCol: styled.th`
  `,

  Body: styled.tbody``,
  Row: styled.tr``,
  Col: styled.td``,
  ProductName: styled.span`
  `,
  Text: styled.span`
  font-size:15px;
  font-weight:600;
  font-family: 'Arial';
  font-style: normal;
  `
}


const UserInfo = ({ data }) => {
  return (
    <S.Table>
      {data &&
        <S.Body>
        {data.map(user => (
          <S.Row key={user.userId}>
            <S.Col>
              <S.ProductName>
              <h3>User email</h3><S.Text>{user.email}</S.Text>
              </S.ProductName>
            </S.Col>
            <S.Col>
            <h3>Hero intro</h3><S.Text>{user.hero_intro}</S.Text>
            </S.Col>
            <S.Col>
            <h3>Hero magic</h3><S.Text>{user.hero_magic}</S.Text>
            </S.Col>
            <S.Col>
              <h3>Hero profecy</h3><S.Text>{user.hero_profecy}</S.Text>
            </S.Col>
          </S.Row>
        ))}
        </S.Body>
      }
    
      
    

    </S.Table>
  )
}

export default UserInfo