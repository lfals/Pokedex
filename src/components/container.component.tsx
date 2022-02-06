import styled from 'styled-components'


const Container = styled.div`
    width: 50vw;
    margin: 0 auto;
    background-image: url(${props => props.theme.background});
    height: 100vh;
    background-repeat: no-repeat;
    background-position: bottom left;


    @media (max-width: 1024px) {
    width: 90vw;
        
    }
`

export default Container