import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#F5F6F8',
  text: 'black',
  jobCard: '#FFFFFF',
};

export const darkTheme = {
  body: '#131822',
  text: 'white',
  jobCard: '#19212D',
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.body}
}
* {
  color: ${(props) => props.theme.text}
}

.jobCard {
  background-color: ${(props) => props.theme.jobCard}
}

.jobDetailHeader {
  background-color: ${(props) => props.theme.jobCard}
}

.jobDetailDescription {
  background-color: ${(props) => props.theme.jobCard}
}

.formRow {
  background-color: ${(props) => props.theme.jobCard}
}

.inputForm {
  color:${(props) => props.theme.text}
  background-color: ${(props) => props.theme.jobCard}
}
.location {
  color:${(props) => props.theme.text}
  background-color: ${(props) => props.theme.jobCard}
}
`;
