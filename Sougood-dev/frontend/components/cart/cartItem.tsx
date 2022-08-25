import { Button } from 'react-bootstrap';
import ICartItem from "../../types/cart";
import styles from "../../assets/styles/components/cart.module.css";
import buttonStyle from "../../assets/styles/components/buttons.module.css";
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { CloudService } from "../../config/config";
import { scale } from '@cloudinary/url-gen/actions/resize';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  item: ICartItem;
  addToCart: (clickedItem: ICartItem) => void;
  removeFromCart: (id: string) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  //const [image, setImage] = useState<string>("image-default.png");
  const [image, setImage] = useState<CloudinaryImage>();
  const defaultImage = "image-default.png";
  const defaultWidth = 120;
  const defaultHeight = 90;

  useEffect(() => {
    if (!item) return;
    if (item.image ) {
      const newImage = CloudService.image(item.image);
      newImage.resize(
        scale()
        .width(defaultWidth)
        .height(defaultHeight)
      );
      setImage(newImage);
    }
  }, [item]);

  return (
  <div className={styles.cartItemContainer}>
    <div className={styles.cartItem}>
      <h3>{item.name}</h3>
      <div className={styles.information}>
        <p>Precio: $ {item.price}</p>
        <p>Total: $ {(item.price * item.amount)}</p>
      </div>
      <div className={styles.buttons}>
        <Button
          size="sm"
          variant="outline-success"
          className={buttonStyle.buttonAmount}
          onClick={() => removeFromCart(item.id)}
        > - </Button>
        <p>Cantidad: {item.amount}</p>
        <Button
          size="sm"
          variant="outline-success"
          className={buttonStyle.buttonAmount}
          onClick={() => addToCart(item)}
        > + </Button>
      </div>
    </div>
    { image ? <AdvancedImage className={styles.productCardImage} cldImg={image} /> :
                <Image src={require('../../assets/images/' + defaultImage)} className={styles.productCardImage} width="120px" height="90px" />
     }
  </div>
);
}

export default CartItem;
