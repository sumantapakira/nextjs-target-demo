import styles from "./button.module.scss";

interface ButtonProps {
    children?: any;
    type?:string;
    count?:number;
    style?:any;
  }
  
  const Button: React.FC<ButtonProps> = ({ type, count, style, ...props }) => {
    return (
        <button className={styles.container} {...props}>
         {props.children}
        </button>
      );
  };

  export default Button;