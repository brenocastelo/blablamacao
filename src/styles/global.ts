import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing:border-box
  }

  body {
    background-color: #FFF;
  }

  .message-1 {
      position: relative;
      top: 10px;
      left: 90px;
    }

    .message-2 {
      position: relative;
      top: 200px;
    }

    .message-3 {
      position: relative;
      bottom: 150px;
      right: -80%;
    }

    .message-4 {
      position: relative;
      bottom: 10px;
      right: -90%;
    }

    .message-5 {
      position: relative;
      bottom: -20px;
      left: 500px;
    }

    .message-6 {
      position: relative;
      bottom: 50%;
      left: 50%;
    }
`