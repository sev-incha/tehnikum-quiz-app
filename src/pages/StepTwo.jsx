import React, { useState } from "react";
import { Header } from "./components/Header";
import { Indicator } from "./components/indecator";
import { ListedAnswerItem } from "./components/ListedAnswerItem";
import { LinkButton } from "./components/LinkButton";

export const StepTwo = ( ) => {
  const [checkedItem, setCheckedItem] = useState(null)




  const answerType  = [
    {
      id: 'variant=1',
      text: 'Ваш ответ 1'
    },
    {
      id: 'variant=2',
      text: 'Ваш ответ 2'
    },
    {
      id: 'variant=3',
      text: 'Ваш ответ 3'
    },
    {
      id: 'variant=4',
      text: 'Ваш ответ 4'
    }
  ]
  
  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
          <Indicator progress={2}/>
        <div className="question">
          <Header  type="h2" headerText="2. Занимательный вопрос" />
          <ul className="variants">
            {
              answerType.map(answerItem => (
                <ListedAnswerItem 
                key={answerItem.id} 
                id={answerItem.id} 
                answerText={answerItem.text} 
                isChecked={checkedItem === answerItem.id}
                onChange={() => setCheckedItem (answerItem.id)}
                />
              ))
            }
          </ul>
          <LinkButton
          isDisabled={!checkedItem}
          to='/step-three'
          linkState={3}
          buttonLabel="Далее"
          />
        </div>
      </div>
    </div>
  </div>
  )
}


