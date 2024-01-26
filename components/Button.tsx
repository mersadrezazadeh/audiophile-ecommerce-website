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
      "bg-brand-100 px-8 py-3 font-bold uppercase text-sm text-gray-100 transition-all hover:brightness-110",
    secondary: "",
    ghost: "",
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
