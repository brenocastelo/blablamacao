import styled from 'styled-components'

import background from '../../assets/background.png'
import ovalBackground from '../../assets/oval-background.png'

export const Container = styled.div`
  height: 100vh;

  display:flex;
  flex-direction: column;
  align-items:center;
`;

export const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #FF9900;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  
  padding:0 40px;
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 1100px;

  div {
    width: 50%;

    h1 {
      font-size: 44px;
      color: #2F281E;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      color: #544837;
      margin-bottom: 10px;
    }
  }

  img {
    height: 50%;
  }
`

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  width: 100%;
  height: 500px;
  padding: 20px 40px;
  background: url(${background}) no-repeat 50%;
  background-size:cover;

  > div {
    display: flex;
    margin: 30px 0;
  }

  h1 {
    width: 600px;
    text-align:center;
  }

  button {
    height: 55px;
    width: 175px;

    background-color: #FF9900;
    color: #FFF;
    border: 0;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background-color: #e48a04;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;

  border: 1px solid #eead4b;
  border-radius: 10px;

  width: 240px;
  margin: 10px;

  strong {
    text-align: center;
  }
`
export const Tip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  max-height: 700px;
  height: 100%;

  div {
    width: 50%;

    p {
      margin: 20px 0;
      color: #544837;
    }
  }

  img {
    height: 50%;
  }
`;

export const Community = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-top: 30px;

  width: 100%;
  background: url(${ovalBackground}) no-repeat center 10px;
  background-size:cover;
`;

export const Messages = styled.div`
    position: relative;
    width: 100%;
    padding: 0px 180px;
`;

export const Message = styled.div`
  position: relative;

  img {
    height: 80px;
    border-radius: 50%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }

  div {
    position: relative;

    width: 200px;
    top: 10%;
    left: 50px;
    background: #fff;
    padding: 5px 10px;;
    border-radius: 20px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   
    p {
      font-size: 14px;
      color: #544837;
    }
  }
`

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   width: 100%;
`

export const CommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 50%;
  left: 25%;
  width: 700px;
  
  p {
    margin: 30px 0;
    color: #544837;
  }

  a {
    height: 55px;
    width: 150px;
    background: #FF9900;
    color: #FFF;
    border: 0;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content:center;

    font-size: 18px;
    font-weight:bold;
    text-align: center;
    text-decoration: none;

    &:hover {
      background: #e28a05;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 70px 0;
  height: 150px;
  width: 100%;
  border-top: 1px solid #FF9900;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    width: 600px;

    a {
      text-decoration: none;
      margin-left: 10px;
    }
  }

  strong {
    margin-right: 10px;
  }
`

export const Videos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 100px 0;
  border-top: 1px solid #FF9900;
  border-bottom: 1px solid #FF9900;
  border-radius: 10px;
  padding: 20px;

  h1 {
    width: 600px;
    margin: 10px;
    text-align: center;
  }

  div {
    display: flex;
    margin: 10px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 25px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 5px 0;
  }
`;

