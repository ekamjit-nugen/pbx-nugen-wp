import { FC } from "react";

const FacebookIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="22"
    viewBox="0 0 13 22"
    fill="none"
    className={className}
  >
    <path
      d="M12 1.11255H9C7.67392 1.11255 6.40215 1.63933 5.46447 2.57701C4.52678 3.5147 4 4.78647 4 6.11255V9.11255H1V13.1125H4V21.1125H8V13.1125H11L12 9.11255H8V6.11255C8 5.84733 8.10536 5.59298 8.29289 5.40544C8.48043 5.21791 8.73478 5.11255 9 5.11255H12V1.11255Z"
      fill="#1877F2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FacebookIcon;
