"use client"
import { MouseEventHandler, useState } from "react"
import styles from "./styles.module.css"
import data from "./data"
export const Accordion = () => {

  const [selected, setSelected] = useState('')

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? '' : getCurrentId)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {
          data && data.length > 0 ?
          data.map(dataItem => (
           <div className={styles.item}>
             <div onClick={() => handleSingleSelection(dataItem.id)} key={dataItem.id} className={styles.title}>
              <h3 className={styles.question}>{dataItem.question}</h3>
              <span className={styles.span}>+</span>
            </div>
            {
              selected === dataItem.id ?
              <div className={styles.content}>{dataItem.answer}</div>
              : null
            }
           </div>
          )) : <div>No data found</div>
        }
      </div>
    </div>
  )
}

