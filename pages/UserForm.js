import styled, { css } from 'styled-components'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '../components/Button'
import { useState } from 'react'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'

const S = {
    UserForm: styled.div`
      background-color: #fff;
    `,

    Content: styled.div`
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      height: 300px;
      padding:15px;
    `,

    FormGroup: styled(FormGroup)`
      margin:15px;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      align-items:center;

    input {
      border-radius: 20px 20px 20px 20px;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      outline-style: none;
      background-color: transparent;
      color: rgba(58, 67, 68, 0.6);
      padding-left: 30px;
      height:40px;
      margin-left:10px;
      flex:2
    }
    `,
    Input: styled(Input)`
    
    `,
    FormGroupText: styled(FormGroup)`
      margin:15px;
      display: flex;
      flex-direction: row;
      justify-content:flex-start;
      align-items:center;
    `,
    TextInput: styled(Input)`
      
      font-weight: 400;
      font-style: normal;
      padding-left: 30px;
      height:40px;
      margin-left:5px;
      align-items:center;
      margin:0 auto;
      ${props => props.validatedIntro && css`
      box-shadow: 0px 1px 1px 1px red;
      `}
    `,
    ErrorMessage: styled.div`
      color:red;
      font-size:12px;
      font-weight:300;
      z-index:10;
    `,
    Row: styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `,
  }

const UserForm =  () => {
  const dispatch = useDispatch()

  const [emailValue, setEmailValue] = useState('')
  const [heroProfecyValue, setHeroProfecyValue] = useState()
  const [magicValue, setMagicValue] = useState('')
  const [heroIntroValue, setHeroIntroValue] = useState('')
  const [checkData, setCheckData] = useState('')

  const [buttonDefault, setbuttonDefault] = useState('')

  const disabled = (emailValue && heroProfecyValue && magicValue && heroIntroValue && checkData) ? true : false

  const error = !heroIntroValue ? <S.ErrorMessage>Please file the gap!</S.ErrorMessage> : null
  const errorEmail = !emailValue ? <S.ErrorMessage>Please file the gap!</S.ErrorMessage> : null
  const errorCheck = !checkData ? <S.ErrorMessage>Changes are not accepted!</S.ErrorMessage> : null
  const errorheroProfecy = !heroProfecyValue ? <S.ErrorMessage>Hero profecy is not selected!</S.ErrorMessage> : null
  const errorMagic = !magicValue ? <S.ErrorMessage>Hero magic is not selected!</S.ErrorMessage> : null

  const validateForm = () => {
    
    dispatch({
      type:'USER_SUBMITTED',
      payload:({
        email: emailValue,
        userId: Math.random(),
        hero_profecy: heroProfecyValue,
        hero_intro: heroIntroValue,
        hero_magic: magicValue,
        checked: checkData
      })
    })
    alert('User added')
  }

const onSubmitHandler = (event)=> {
  event.preventDefault()
  setbuttonDefault(true)
  if (disabled) {
    validateForm()
    }
  }

  return (
   <Layout>
   <h1>User Form</h1>
    <S.UserForm>
      <S.Content>
        <Form>
        <S.FormGroup>
          <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="your email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
          { buttonDefault  &&  errorEmail }
        </S.FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select your hero profecy</Label>
          <S.Input type="select" name="select" id="exampleSelect" value={heroProfecyValue} onChange={(e)=>setHeroProfecyValue(e.target.value)}>
            <option>Necromancer</option>
            <option>Beastmaster</option>
            <option>Druid</option>
            <option>Alchemic</option>
            <option>Witch</option>
            <option>Knight</option>
            <option>Overlord</option>
          </S.Input>
        </FormGroup>
        { buttonDefault  &&  errorheroProfecy }
        <S.FormGroup>
          <Label for="exampleText">Introduce your hero </Label>
          <S.TextInput  type="textarea" name="text" id="exampleText" value={heroIntroValue} onChange={(e)=>setHeroIntroValue(e.target.value)} />
            { buttonDefault  && error }
        </S.FormGroup>
        <FormGroup tag="fieldset">
          <legend>Choose Magic</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  value='Earth Magic' onChange={(e)=>setMagicValue(e.target.value)}/>{' '}
              Earth Magic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value='Water Magic' onChange={(e)=>setMagicValue(e.target.value)} />{' '}
              Water Magic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value='Air Magic' onChange={(e)=>setMagicValue(e.target.value)}/>{' '}
              Air Magic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value='Fire Magic' onChange={(e)=>setMagicValue(e.target.value)}/>{' '}
              Fire Magic
            </Label>
          </FormGroup>
          { buttonDefault  &&  errorMagic }
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox"  onChange={()=>setCheckData(!checkData)} />{' '}
            Accept all changes
          </Label>
          { buttonDefault  &&  errorCheck }
          <Button value={buttonDefault} OnClick={(event)=>onSubmitHandler(event)}>Submit</Button>
        </FormGroup>
      </Form>
    </S.Content>
  </S.UserForm>
</Layout>
 )
}

export default UserForm