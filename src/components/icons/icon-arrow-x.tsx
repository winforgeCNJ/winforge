interface IconArrowXProps {
  right: boolean;
  className: string
}

const IconArrowX: React.FC<IconArrowXProps> = ({ right, className }) => {
  return (
    <svg
      className={`${right && "rotate-180"} ${className}`}
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99997 18L6.39409 15.3941C5.20604 14.2061 4.61201 13.612 4.38945 12.9271C4.19367 12.3245 4.19367 11.6755 4.38945 11.0729C4.61201 10.388 5.20604 9.79394 6.39409 8.60589L8.99997 6"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.5 12H21"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default IconArrowX;
