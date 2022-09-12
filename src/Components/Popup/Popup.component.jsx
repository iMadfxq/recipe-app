import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import ListItem from "../ListItem/ListItem.component";
import "./Popup.styles.scss";

export default function Popup() {
  const { popupIsOpen, type, data, setterFunc } = useContext(PopupContext);
  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    setUpdated(!updated)
  },[data])
  if (popupIsOpen) {
    switch (type) {
      case "ingredientsList":
        return (
          <section>
            <section>
              <h2>Ingredients:</h2>
              <ul>
                {data.length &&
                  data.map((ing) => (
                    <ListItem
                      key={ing.id}
                      item={ing}
                      listOfItems={data}
                      setListOfItems={setterFunc}
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
