import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginLinkStyled = styled(Link)`

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

    &:hover, &:visited, &:link, &:active{
        text-decoration: none !important;
    }

    &:active{
        border: 1px solid #2972FF;
        color: #2972FF;
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

export {RightPainelWrapper, LoginLinkStyled};