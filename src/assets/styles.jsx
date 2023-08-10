export const sectionTitleStyle = `
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  font-family: var(--font-family-title);

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const navLinkStyle = `
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding-bottom: 4px;

  &:hover {
    color: var(--primary-color);
    box-shadow: 0 3px 0 var(--primary-color);
  }

  &:active {
    color: var(--primary-color-active);
    box-shadow: 0 3px 0 var(--primary-color-active);
  }
`;

export const linkHoverStyle = `
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: var(--primary-color);
  }

  &:active {
    color: var(--primary-color-active);
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;
