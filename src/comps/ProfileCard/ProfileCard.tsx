import styles from "./ProfileCard.module.css";
import Button from "../Button/Button";
import type { ButtonType } from "../Button/ButtonType";

interface ProfileCardProps {
  name: string;
  imageUrl: string;
  description: string;
  buttonType: ButtonType;
}

function CardProfile({ name, imageUrl, description ,buttonType }: ProfileCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img
        src={imageUrl}
        alt={name}
        className={styles.profileImage}
      />
      <h2 className={styles.profileName}>{name}</h2>
      <p className={styles.profileDescription}>{description}</p>
      <Button text={buttonType} type={buttonType} />
    </div>
  );
}

export default CardProfile;
