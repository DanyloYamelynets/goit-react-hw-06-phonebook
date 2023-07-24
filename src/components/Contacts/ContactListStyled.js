import styled from 'styled-components';

export const ContactsList = styled.ul`
  background-color: #e6e6e6;
  border-radius: 15px;
  padding: 20px;
  padding-bottom: 10px;
`;
export const ContactsItems = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
`;
export const ContactInfo = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
  flex-grow: 1;
`;
export const DeleteBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #710101ba;
  background-color: #fce3e3;
  font-size: 15px;
  font-weight: 700;
  color: #450000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #7c0000;
    color: white;
    transition: 250ms;
  }
  margin-left: 15px;
  margin-bottom: 10px;
  text-align: center;
`;
