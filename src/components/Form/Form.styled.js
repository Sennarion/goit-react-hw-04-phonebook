import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const LabelName = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Input = styled.input`
  display: block;
  min-width: 400px;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(1)};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: transparent;
  }
`;
