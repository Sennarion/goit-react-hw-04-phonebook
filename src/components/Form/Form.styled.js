import styled from "styled-components";

export const Label = styled.label`
    margin-right: ${({ theme }) => theme.spacing(5)};
    display: inline-flex;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
`;