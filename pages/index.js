import styled from 'styled-components'
import { connect } from 'react-redux'
import { userSubmitted } from '../redux/actions'
import UserForm from '../components/UserForm'
import  UserInfo  from '../components/UserInfo'



const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    flex-direction:column;
  `,
  Row: styled.div`
    margin-top:40px;
  `,
  Button: styled.button`
    height:50px;
    width:50px;
    cursor:pointer;
    background:#eee;
    border:none;
    border-radius:5px 5px 5px 5px;
    `
}

const Index = ({ data,userSubmitted }) => {


  

  return (
    <S.Wrapper>
        <S.Row>
         <UserForm onSubmit={userSubmitted}/>
        </S.Row>
       <S.Row>
        <UserInfo data={data}/>
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