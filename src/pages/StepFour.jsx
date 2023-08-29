import React, {useState} from "react";
import { Indicator } from "./components/indecator";
import { NumericAnswerItem } from "./components/NumericAnswerItem";
import { Header } from "./components/Header";
import { LinkButton } from "./components/LinkButton";


export  const StepFour = ( ) => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerOptions = [
    {
      id: 'numeric-answer-1',
      answerText:1
    },
    {
      id: 'numeric-answer-2',
      answerText:2
    },
    {
      id: 'numeric-answer-3',
      answerText:3
    },
    {
      id: 'numeric-answer-4',
      answerText:4
    },
    {
      id: 'numeric-answer-5',
      answerText:5
    },

  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={4}/>
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос"/> 
            
            <ul className="level-variants">
              {answerOptions.map (answerItem => (
                <NumericAnswerItem
                key={answerItem.id} 
                id={answerItem.id} 
                answerText={answerItem.answerText}
                isChecked={checkedItem === answerItem.id}
                onChange={() => setCheckedItem (answerItem.id)}
                />
              )) }
             </ul>
              <LinkButton
                isDisabled={!checkedItem}
                to='/thanks'
                linkState={5}
                buttonLabel="Завершить"
              />
          </div>
        </div>
      </div>
    </div>
  )
}


