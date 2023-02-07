import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) =>
        theme.palette.mode === "light" ? "#f2e9e9" : "#363e48"};
`;

export const Header = styled.header``;

export const Main = styled.main`
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
