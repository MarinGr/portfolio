export const sectionTitleStyle = `
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 36px;
  text-align: center;
  font-family: var(--font-family-title);

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const linkHoverStyles = `
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: var(--primary-color);
  }

  &:active {
    color: var(--primary-color-active);
    outline: none;
  }
`;
