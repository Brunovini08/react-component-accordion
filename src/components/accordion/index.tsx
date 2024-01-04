"use client"
import { MouseEventHandler, useState } from "react"
import styles from "./styles.module.css"
import data from "./data"
export const Accordion = () => {

  const [selected, setSelected] = useState([''])

  const handleSingleSelection = (getCurrentId: string) => {
    let cpyMultiple = [...selected];
    const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrent, 1);

    setSelected(cpyMultiple);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        <div className={styles.box_description}>
          <h1 className={styles.description}>React-Modal</h1>
        </div>
        {
          data && data.length > 0 ?
            data.map(dataItem => (
              <div className={styles.item}>
                <div onClick={() => handleSingleSelection(dataItem.id)} key={dataItem.id} className={styles.title}>
                  <h3 className={styles.question}>{dataItem.question}</h3>
                  <span className={styles.span}>+</span>
                </div>
                {
                  selected.indexOf(dataItem.id) !== -1 ?
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

