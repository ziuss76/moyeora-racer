import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  left: 0;
  right: 0;
  top: 0;
  height: 6rem;
  padding: 0 5rem;

  border-bottom: #cbd5e1 1px solid;
  background: var(--main-white);

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;
export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 375px) {
    justify-content: center;

    & .morae-logo {
      width: 10rem;
    }
    & .user-logo {
      display: none;
    }
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AdminInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 10rem;
`;
export const AdminName = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;
