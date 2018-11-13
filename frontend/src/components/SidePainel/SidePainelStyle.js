import styled from 'styled-components';

const SidePainelWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
        position: absolute;
        top: -9999px;
        left: -9500px;
        right: -9999px;
        bottom: -9999px;
        margin: auto;
        z-index: -1;
    }

    div {
        margin: 15px;
        text-align: justify;
        padding-left: 60px;
    }

    div span{
        color: #ffffff;
        font: 20px;
        font-weight: bold;
        padding-bottom: 5px;
    }
`;

export default SidePainelWrapper;