export const HeroImg = styled.img`
  position: static;  /* Ensures the image stays in place */
  max-width: 400px;
  width: 100%;
  height: auto;
  border: none;
  object-fit: cover;
  margin: 20px;
  pointer-events: none;  /* Disables hover effects */
  
  /* Remove any animations or transitions */
  animation: none;
  transition: none;
  transform: none !important;
  
  &:hover {
    transform: none !important;
    animation: none;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`; 