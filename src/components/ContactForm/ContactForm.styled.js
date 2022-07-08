import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 6px 5px;
  border-radius: 5px;
  border: none;
  box-shadow: ${props => ` 0px 0px 2px 1px ${props.theme.colors.secondary}`};
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.add};

  display: block;
  margin: 0 auto;
  :hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s ease;
    box-shadow: ${props => ` 0px 0px 2px 1px ${props.theme.colors.shadowBox}`};
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputEl = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.preBold};
  color: ${({ theme }) => theme.colors.text};
`;
