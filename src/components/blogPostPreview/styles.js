import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colors.offBgColor};
  border-radius: ${props => props.theme.br};
  box-shadow: ${props => props.theme.colors.bxs};
  padding: 2rem 2rem 1rem;
  width: 100%;

  .image {
    img {
      border-radius: ${props => props.theme.br};
    }
  }

  .content {
    width: 100%;

    hr {
      border: 0.5px solid ${props => props.theme.colors.textColor};
    }

    .published {
      font-size: 0.875rem;
      opacity: 0.5;
    }
  }
`;
