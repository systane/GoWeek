import styled from 'styled-components';

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
    }

    h1{
        word-wrap: break-word;
    }

    h2{
        font: 20px bold;
    }
`;

export default RightPainelWrapper;