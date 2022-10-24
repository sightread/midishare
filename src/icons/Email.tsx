import { wrap } from './wrap'

export const Email = wrap((props) => (
  <svg
    {...props}
    aria-hidden="true"
    focusable="false"
    role="img"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4L8.8906 9.2604C9.5624 9.7083 10.4376 9.7083 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))
