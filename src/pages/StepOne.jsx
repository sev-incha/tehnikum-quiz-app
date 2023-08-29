import React, { useState } from "react";
import { Header } from "./components/Header";
import { AppImput } from "./components/AppImput";
import { Indicator } from "./components/indecator";
import { LinkButton } from "./components/LinkButton";

export const StepOne = () => {
  const[ answerOne, setAnswerOne ] = useState('') 
  
  const isNextButtonDisablid = !answerOne
  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={1}/>
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
              <label className="input-wrapper">
                <AppImput
                  required="isRequired"
                  type="text"
                  name="answer"
                  placeholder="Ваш ответ"
                  errorText="Введите номер в правильном формате например"
                  onChange={(e) => setAnswerOne (e.target.value.trim())}
                />
              </label>
                <LinkButton 
                isDisabled={isNextButtonDisablid}
                to='/step-two'
                linkState={2}
                buttonLabel="Далеe"
                />
          </div>
        </div>
      </div>
    </div>
  )
}

