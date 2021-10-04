import styles from "./products.module.scss";

interface ProductsProps {
    reverse?: boolean;
    children?:any;
  }
  
  const Products: React.FC<ProductsProps> = ({ reverse, children}) => {
    return (
        <div
          className={styles.container}
          style={{ direction : reverse ? "rtl" : "ltr" }}
        >
          <div style={{ gridArea: "first" }}>{children[0]}</div>
          <div style={{ gridArea: "second" }}>{children[1]}</div>
          <div style={{ gridArea: "third" }}>{children[2]}</div>
          <div style={{ gridArea: "fourth" }}>{children[3]}</div>
        </div>
      );
  };

  export default Products;