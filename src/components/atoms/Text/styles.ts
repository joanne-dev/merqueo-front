import styled from "styled-components";

interface IStylesProps {
    fontSize: string;
}

export const TextStyled = styled.p `
  font-size: ${({ fontSize }: IStylesProps) => fontSize};
`
