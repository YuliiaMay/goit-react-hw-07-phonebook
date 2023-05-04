import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 30px;
`;

export const CteateFormBtn = styled.button`
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid #0070A0;
    padding: 6px;
    width: 100%;
    font-size: 16px;
    color: #0070A0;

    &:hover,
    &:focus {
        background-color: #006B99;
        color: #fff;
    }
`;

export const FormTitle = styled.h2`
    font-size: 18px;
    text-align: center;
    margin-bottom: 8px;
    color: #0070A0;
`;

export const Form = styled.form`
    border: 2px solid #fff;
    background-color: #D2E2EA;
    box-shadow: 1px 1px #E6ECEF;
    padding: 18px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #0070A0;    
`;

export const ContactFormLabel = styled.label`
    font-size: 12px;
    color: #0070A0;
`;

export const ContactInput = styled.input`
    margin-bottom: 16px;
    height: 30px;
    background-color: transparent;
    border: 2px solid #0070A0;

    &:hover,
    &:focus {
        border: 2px solid #0070A0;
        box-shadow: 4px 2px 1px 1px #0070A0;
    }
`;

export const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;

export const CancelFormBtn = styled.button`
    height: 26px;
    width: 100px;
    background-color: transparent;
    color: #0070A0;
    cursor: pointer;
    font-size: 12px;
    color: #0070A0;
    border: 2px solid #fff;

    &:hover,
    &:focus {
        background-color: #FFCFDA;
        box-shadow: 4px 2px 1px 1px #FF3364;
    }
`;

export const AddContactBtn = styled.button`
    height: 26px;
    width: 100px;
    background-color: transparent;
    color: #0070A0;
    cursor: pointer;
    font-size: 12px;
    color: #0070A0;
    border: 2px solid #fff;

    &:hover,
    &:focus {
        background-color: #BFFFC9;
        box-shadow: 4px 2px 1px 1px #33FF54;
    }
`;