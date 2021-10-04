import Image from 'next/image'
import styles from "./vertical.module.scss";
import Link from 'next/link';

interface VerticalCardProps {
    bgColor: string;
    brand?: string;
    name:string;
    price:number;
    sale_price:number;
    image:any;
    border?:string;
    href?:string;
  }

const VerticalCard: React.FC<VerticalCardProps> = ({
     bgColor, 
     brand,
     name,
     price,
     sale_price,
     image,
     border,
     href,
     ...props }) => {
      return (
        <Link href={href || "#"} passHref>
          <div
            className={styles.verticalCard}
            data-analytics-hover={name}
            style={{
              backgroundColor: bgColor || "",
              border: border && "2px solid #eee",
            }}
          >
            {sale_price && price && (
              <button className={styles.favContainer}>
                {(((price - sale_price) / price) * 100) | 0}%
              </button>
            )}
            <div className={styles.imageContainer}>
              {image && <Image className={styles.image} src={image} loading="lazy" alt=''/>}
            </div>
            <div className={styles.textContainer}>
              <h4 className={styles.brandText}>{brand}</h4>
              <h4>{name}</h4>
              {sale_price ? (
                <div className={styles.priceContainer}>
                  <div className={styles.prices}>
                    <span className={styles.priceText}>{price}$</span>
                    <span className={styles.salePriceText}>{sale_price}$</span>
                  </div>
                </div>
              ) : (
                <span className={styles.salePriceText}>{price || 0}$</span>
              )}
            </div>
          </div>
        </Link>
      );
}

export default VerticalCard;