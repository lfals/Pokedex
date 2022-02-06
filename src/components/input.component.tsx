import styled from "styled-components";

const Input = styled.input`
    width: 80%;
    background-color: white;
    height: 72px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 16px;
    padding: 0 20px;
    font-size: 20px;

    transition: all 0.2s;

    &:focus{
        border: 1px solid ${props => props.theme.secondary};
        outline: none;
    }

`

export default Input