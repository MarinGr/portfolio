import styled from "styled-components";

export default function Blob() {
  return (
    <BlobSvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#10a4c963"
        d="M41.6,-64.8C55.7,-64,70,-56.3,75.2,-44.4C80.4,-32.4,76.5,-16.2,70,-3.8C63.5,8.7,54.3,17.4,47.5,26.5C40.6,35.6,36.1,45.1,28.5,49.2C21,53.3,10.5,52.1,1,50.3C-8.4,48.5,-16.9,46.2,-27.9,44.1C-39,42,-52.7,40.2,-62.4,32.8C-72.1,25.5,-77.9,12.8,-77.5,0.2C-77.2,-12.4,-70.7,-24.7,-65,-39.1C-59.4,-53.4,-54.5,-69.7,-43.8,-72.4C-33.1,-75.2,-16.5,-64.4,-1.4,-62C13.8,-59.6,27.6,-65.6,41.6,-64.8Z"
        transform="translate(100 100)"
      />
    </BlobSvg>
  );
}

const BlobSvg = styled.svg`
  position: relative;
  height: 500px;
  width: 500px;
  bottom: 220px;
`;
