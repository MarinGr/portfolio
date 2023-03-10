export const sectionTitleStyle = `
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const linkHoverStyles = `
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: var(--primary-color);
  }

  &:active {
    color: var(--primary-color-active);
  }
`;

export const CTABtn = `
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  background-color: var(--primary-color);
  color: var(--white);
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-color-hover);
  }

  &:active {
    background-color: var(--primary-color-active);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
