import styled from 'styled-components'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from './Button'
import { useState } from 'react'

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
      flex-direction: column;
      justify-content:flex-start;
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
  `
}

const UserForm =  ({ onSubmit, }) => {

  // const emailRef = React.createRef()
  // const heroProfecyRef = React.createRef()
  // const heroIntroRef = React.createRef()
  // const heroMagicRef = React.createRef()

  const [emailValue, setEmailValue] = useState('')
  const [heroProfecyValue, setHeroProfecyValue] = useState()
  const [magicValue, setMagicValue] = useState('')
  const [heroIntroValue, setHeroIntroValue] = useState('')
  const [checkData, setCheckData] = useState('')

  const disabled = (emailValue && heroProfecyValue && magicValue && heroIntroValue && checkData) ? false : true


const onSubmitHandler = (event)=> {
  event.preventDefault()
  onSubmit({
      email: emailValue,
      userId: Math.random(),
      hero_profecy: heroProfecyValue,
      hero_intro: heroIntroValue,
      hero_magic: magicValue,
      checked: checkData
    })
    alert('User added')
  }

    return (
    <S.UserForm>
      <S.Content>
        <Form>
        <S.FormGroup>
          <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="your email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
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
        <S.FormGroup>
          <Label for="exampleText">Introduce your hero </Label>
          <S.TextInput type="textarea" name="text" id="exampleText" value={heroIntroValue} onChange={(e)=>setHeroIntroValue(e.target.value)} />
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
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox"  onChange={()=>setCheckData(!checkData)} />{' '}
            Accept all changes
          </Label>
        </FormGroup>
        <Button disabled={disabled} OnClick={(event)=>onSubmitHandler(event)}>Submit</Button>
      </Form>
    </S.Content>
  </S.UserForm> 
    )
   }


export default UserForm