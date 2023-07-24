import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9f3ff;
  border-radius: 15px;
`;
export const ContactsLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 150px;
`;
export const ContactName = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const ContactNumber = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const ContactInput = styled.input`
  height: 20px;
  border-radius: 5px;
  border: 1px solid #001b74;
`;
export const AddBtn = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 150px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
