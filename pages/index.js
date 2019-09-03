import styled from 'styled-components'
import { connect } from 'react-redux'
import { userSubmitted } from '../redux/actions'
import Layout from '../components/Layout';

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    flex-direction:column;
  `,
  Row: styled.div`
    margin-top:150px;
  `,
  Button: styled.button`
    height:50px;
    width:50px;
    cursor:pointer;
    background:#eee;
    border:none;
    border-radius:5px 5px 5px 5px;
    `,
  Title: styled.div`
    font-size:20px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5px;
    font-weight:600;
  `
}
const Index = ({ data,userSubmitted }) => {
  return (
    <S.Wrapper>
        <S.Row>
        <S.Title>Heroes Form</S.Title>
        {/* <Link  href='../components/UserForm'>
            <a>User Form</a>
          </Link> */}
         {/* <UserForm onSubmit={userSubmitted}/> */}
         <Layout data={data} onSubmit={userSubmitted}/>
           
        </S.Row>
    </S.Wrapper>
  )
}



const mapStateToProps = state => ({
  data: state.usersReducer.data,
})



export default connect(
    mapStateToProps,
    {
      userSubmitted,
    }
  )(Index)