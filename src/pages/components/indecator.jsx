import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Indicator = () => {
  const [progress, setProgress] = useState(0)
  const locattion = useLocation()

  useEffect(() => {
    const customProgress = locattion?.state?.progress

    if (customProgress) {
      setProgress(customProgress)
    }
  },[])
  
    return (
        <div className="indicator">
          <div className="indicator__text">
            <span className="indicator__description"
              >Скидка за прохождение опроса:
            </span>
            <span className="indicator__value">15%</span>
          </div>
          <div className="indicator__progressbar">
          {
            Array.from({ length: 4 }).map(
              ( _, idx) => < div  key={ `indicator__unit-${idx}`} 
                            className={`indicator__unit  ${ idx < progress &&'_active'}`} />)
          }
          </div>
        </div>
    )
}