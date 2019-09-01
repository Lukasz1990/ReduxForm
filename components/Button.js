import styled, { css } from 'styled-components'

const S = {
    Button: styled.button`
      background-color: rgba(251, 253, 254, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(204, 204, 204, 1);
      box-shadow: none;
      border-radius: 40px;
      font-size: 14px;
      color: rgba(57, 67, 68, 0.8);
      width: 170px;  
      height: 60px;
      font-weight: bold;
      font-style: normal;
      margin-top:10px;
      cursor:pointer;
      margin:5px;
      &:hover {
        box-shadow: 0px 2px 4px rgba(57, 67, 68, 0.349019607843137);
        background-color:#ddd;
        color:#fff;
      }
      ${props => props.disabled && css`
      background: #cecece;
      cursor: not-allowed;
      &:hover {
        background: #cecece;
      }
    `}
    `
}


const Button = ({ children,OnClick,disabled }) => {

  const onClick = () => {
      if (disabled) return
      OnClick(event)
    }

    return (
        <S.Button  onClick={onClick} disabled={disabled}> 
            {children}
        </S.Button>
    )
}

export default Button;