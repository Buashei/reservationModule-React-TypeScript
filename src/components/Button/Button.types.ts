export type ButtonComponentProps = {
  children?: string | HTMLCollection | undefined;
  onClick: (e?: React.MouseEvent) => void;
  width?: string;
  height?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
