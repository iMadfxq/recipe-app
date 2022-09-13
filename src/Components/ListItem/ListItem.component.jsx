import { useContext } from 'react'
import { PopupContext } from '../../Contexts/PopupContext'
import { POPUP_ACTION_TYPES } from '../../Contexts/PopupContext'
import './ListItem.styles.scss'

export default function ListItem({item, listOfItems, setListOfItems, phase}) {
  const {text, id} = item

  const {openPopup} = useContext(PopupContext)

  const completeHandler = (e) => {
    e.target.parentElement.classList.toggle('completed')
  }

  const deleteHandler = e => {
    e.stopPropagation()
    const newList = listOfItems.filter((item) => {
      if(item.id == e.target.parentElement.dataset.id) {
        return false
      } else {
        return true
      }
    })
    setListOfItems(newList)
    // e.target.parentElement.classList.add('deleted')
  }

  return(
    <li data-id={id} >
      <span onClick={completeHandler}>✅</span>
      <p>{text}</p>
      <span onClick={deleteHandler}>❌</span>
    </li>
  )
}