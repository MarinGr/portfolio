export const sectionTitleStyle = `
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 36px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const linkHoverStyles = `
  transform-origin: 0 ;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: var(--primary-color);
    transform: scale(1.07);
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
