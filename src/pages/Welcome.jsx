import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { AppButton } from "./components/AppButton";
import { AppImput } from "./components/AppImput";

export const Welcome = () => {
  const [userName, setUsername] = useState("")
  const [userPhone, setUserphone] = useState("")
  //Валидация для полей
  const [userNameError, setUsernamaError] = useState(false)
  const [userPhoneError, setUserphoneError] = useState(false)

  useEffect(() => {
    const rawUserData = localStorage.getItem('userData')
    if (rawUserData) {
      const { userName, userPhone } = JSON.parse(rawUserData)
      if (userName) {
        setUsername(userName)
      }
      if (userPhone) {
        setUserphone(userPhone)
      }
    }
  }, [])

  const navigate = useNavigate()


  const hasError = userNameError || userPhoneError
  const isNextButtonDisablid = !userName || !userPhone || hasError


  const validateUsername = (e) => {
    const regex = /^[a-zA-Zа-яА-Я]+$/;

    if (regex.test(e.target.value)) {
      if (userNameError) {
        setUsernamaError(false)
      }
    } else {
      setUsernamaError(true)
    }

    setUsername(e.target.value)
  }

  const validateUserphone = (e) => {
    const regex = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

    if (regex.test(e.target.value)) {
      if (userPhoneError) {
        setUserphoneError(false)
      }
    } else {
      setUserphone(true)
    }

    setUserphone(e.target.value)
  }

  const submitForm = () => {
    const userData = {
      userName: userName,
      userPhone: userPhone
    }

    if (userName && userPhone) {
      localStorage.setItem('userData', JSON.stringify(userData))
    }

    navigate('/step-one', {
      state: {
        'progress': 1
      }
    })
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header type="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">

            <AppImput
              id="username"
              isDisabled={true}
              name="username"
              type="text"
              labelText="Ваш имя"
              placeholderText="Ваш ответ"
              errorText="Имя должно содержать только буквы"
              onChange={validateUsername}
              hasError={userNameError}
              value={userName}
            />

            <AppImput
              id="phone"
              isDisabled={true}
              name="phone"
              type="tel"
              labelText="Ваш номер"
              placeholderText="+998 9- --- -- --"
              errorText="Введите номер в правильном формате"
              onChange={validateUserphone}
              hasError={userPhoneError}
              value={userPhone}
            />
            <AppButton
              isDisabled={isNextButtonDisablid}
              type="button"
              id="next-btn"
              buttonText="Далее"
              onClick={submitForm}
            />
          </form>
        </div>
      </div>
    </div>
  )
}


