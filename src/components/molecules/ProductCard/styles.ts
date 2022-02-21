import styled from "styled-components";

export const ProductCardStyled = styled.div `
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,.05);
  padding: 22px 16px 20px;
  margin: 20px;
  transition: all .3s linear;
  min-height: auto;
  width: 180px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ProductActionStyled = styled.div `
    display: flex;
  justify-content: space-between;
  width: 100%;
`


export const IconStyled = styled.div `
  border-radius: 50px;
  border: 2px solid rgba(0,0,0,0.1);
  width: 30px;
  display: flex;
  justify-content: center;
  height: 30px;
  justify-items: center;
  padding-top: 3px;
  cursor: pointer;
  &.add {
    background: #0071ed;
  }
`
