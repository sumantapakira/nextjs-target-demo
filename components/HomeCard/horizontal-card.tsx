import Image from 'next/image'
import styles from "./horizontal.module.scss";

interface HorizontalCardProps {
    bgColor: string;
    title: string;
    desc?:string;
    image:any;
  }

const HorizontalCard: React.FC<HorizontalCardProps> = ({ bgColor, title, desc,image, ...props }) => {
    if (!desc) {
        return (
          <div
            className={styles.horizontalCard}
            data-analytics-hover={title}
            style={{ backgroundColor: bgColor || "" }}
          >
            <div
              className={styles.textContainer}
              style={{ padding: 0, marginRight: 0 }}
            >
              <h3 style={{ marginBottom: 0, fontSize: 32 }}>{title}</h3>
            </div>
            <Image src={image} className={styles.bgImage} alt="" width="500" height="500"/>
          </div>
        );
      }
    
      return (
        <div
          className={styles.horizontalCard}
          data-analytics-hover={title}
          style={{ backgroundColor: bgColor || "" }}
        >
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <span className={styles.description}>{desc}</span>
          </div>
          {image && (
            <div className={styles.imageContainer}>
              <Image src={image} className={styles.bgImage} alt=""/>
            </div>
          )}
        </div>
      );
}

export default HorizontalCard;