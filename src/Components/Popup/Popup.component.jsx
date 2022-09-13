import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import ListItem from "../ListItem/ListItem.component";
import "./Popup.styles.scss";

export default function Popup() {
  const { popupIsOpen, type, data, setterFunc } = useContext(PopupContext);
  
  const [localListOfItems, setLocalListOfItems] = useState(data)

  const closePopupHandler = () => {
    
  }
  
  if (popupIsOpen) {
    switch (type) {
      case "ingredientsList":
        return (
          <section>
            <section>
              <span onClick={closePopupHandler}>ⓧ</span>
              <h2>Ingredients:</h2>
              <ul>
                {localListOfItems.length &&
                  localListOfItems.map((ing) => (
                    <ListItem
                      key={ing.id}
                      item={ing}
                      listOfItems={localListOfItems}
                      setListOfItems={setLocalListOfItems}
                    />
                  ))}
              </ul>
            </section>
          </section>
        );
      case "stepsList":
        return (
          <section>
            <section>
              <h2>Steps:</h2>
              <ol>
                {data.length &&
                  data.map((stp) => (
                    <ListItem
                      key={stp.id}
                      item={stp}
                      listOfItems={data}
                      setListOfItems={setterFunc}
                    />
                  ))}
              </ol>
            </section>
          </section>
        );

      default:
        return <></>;
    }
  }
  return;
}
