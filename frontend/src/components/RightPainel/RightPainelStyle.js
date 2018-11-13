import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubscriveLinkStyled = styled(Link)`
   
    &:hover, &:visited, &:link, &:active{
        text-decoration: none !important;
    }

    border-radius: 100px;
    box-shadow: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    background-color: #1da1f2;
    border: 1px solid #1da1f2;
    color: white;
    margin-bottom: 5px;

    &:hover{
        background-color: #63ADFF;
    }

   

    &:active{       
        background-color: #2972FF;
        color: white;
    }

    &:focus{
        border: 5px double #1da1f2;
    }
`;

const LoginLinkStyled = styled(Link)`

     &:hover, &:visited, &:link, &:active{
        text-decoration: none !important;
    }

    border-radius: 100px;
    box-shadow: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    background-color: #fff;
    border: 1px solid #1da1f2;
    color: #1da1f2;

    &:hover{
        background-color: #E2FFFF;
    }

   

    &:active{       
        background-color: #2972FF;
        color: white;
    }

    &:focus{
        border: 5px double #1da1f2;
    }
`;

const RightPainelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    padding: 15%;
    text-align: center;

    img{
        width:40px;
        height:40px;
        display: flex;
        justify-content: left;
    }

    h1{
        word-wrap: break-word;
        text-align:left;
        font-size: 30px;
        margin-right: 100px;
        margin-bottom: 40px;
    }

    h2{
        font-size: 20px;
        text-align: left;
        margin-bottom: 10px;
    }
`;

export {RightPainelWrapper, LoginLinkStyled, SubscriveLinkStyled};