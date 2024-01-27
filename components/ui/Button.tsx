import Link from "next/link";

type ButtonProps = {
  variation: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  path?: string;
  children: React.ReactNode;
};

function Button({ variation, onClick, path, children }: ButtonProps) {
  const styles = {
    primary:
      "bg-brand-100 px-8 py-3 text-sm font-bold uppercase text-gray-100 transition-all hover:brightness-110",
    secondary:
      "bg-gray-800 px-8 py-3 text-sm font-bold uppercase text-gray-200 transition-all hover:brightness-200",
    ghost:
      "bg-transparent border-2 border-gray-800/80 px-7 py-2.5 text-sm font-bold uppercase transition-all hover:bg-gray-800 hover:text-gray-200",
  };

  if (path)
    return (
      <Link className={styles[variation]} href={path}>
        {children}
      </Link>
    );

  if (onclick)
    return (
      <button className={styles[variation]} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
