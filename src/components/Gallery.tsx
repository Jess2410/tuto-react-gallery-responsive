import styles from "./Gallery.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Gallery = () => {
  let dataImages = [
    {
      id: 1,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    },
    {
      id: 2,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    },
    {
      id: 3,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    },
    {
      id: 4,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    },
    {
      id: 5,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    },
    {
      id: 6,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    },
    {
      id: 7,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    },
    {
      id: 8,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    },
    {
      id: 9,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    },
    {
      id: 10,
      imageUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? styles.modelOpen : styles.model}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className={styles.gallery}>
        {dataImages.map((item, index) => (
          <div
            className={styles.imageBox}
            key={index}
            onClick={() => getImage(item.imageUrl)}
          >
            <img src={item.imageUrl} className={styles.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
