import styled from "styled-components";

export const LayoutContent = styled.div<{ bg: string; colors: string }>`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.colors};

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Navbar = styled.nav<{ colors: string }>`
  background-color: ${(props) => props.colors};
  color: white;
  width: 100%;
  text-align: center;
`;

export const Timer = styled.div<{ bg: string; colors: string }>`
  width: 30%;

  background-color: ${(props) => props.colors};
  margin: 4rem;
  padding: 0.5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: space-around;

    padding: 0.5rem;
    list-style-type: none;
    width: 70%;
  }

  li {
    background-color: ${(props) => props.bg};
    padding: 0.5rem;
    border-radius: 9px;
  }

  h1 {
    font-weight: 20;
    font-size: 130px;
  }
`;

export const Button = styled.button<{ bg: string;}>`
  background: #ffffff;
  box-shadow: inset 0px -8px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border:0 solid ${(props)=> props.bg};

  width: 331px;
  height: 65px;
  opacity: 0.6;
  transition: 0.5s;

  font-weight: 600;
  font-size: 36px;
  color: ${(props)=> props.bg};

  &:hover {
    opacity: 1;
  }
`;
