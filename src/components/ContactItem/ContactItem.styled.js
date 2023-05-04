import styled from "styled-components";

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 2px;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    &:hover,
    &:focus {
        background-color: #D2E2EA;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.span`
    color: #212121;
    font-size: 18px;
    margin-bottom: 4px;
`;

export const Number = styled.span`
    color: #0070A0;
    font-size: 12px;
`;


export const DeleteContactBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #0070A0;

    &:hover,
    &:focus {
        color: #FF3364;
    }
`;