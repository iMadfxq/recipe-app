import { useContext } from 'react'
import { PopupContext } from '../../Contexts/PopupContext'
import './Popup.styles.scss'

export default function Popup() {
  const {popupIsOpen, type, date} = useContext(PopupContext)
  // switch()
  return (
    <>
    {popupIsOpen === false && (<p>Working</p>)}
    
    </>
  )
}