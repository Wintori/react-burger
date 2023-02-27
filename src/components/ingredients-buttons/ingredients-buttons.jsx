import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientsButtonsStyles from './ingredients-buttons.module.scss'
import { current } from '@reduxjs/toolkit';

const IngredientsButtons = (props) => {

  const { current, setCurrent } = props



  return (
    <div className={`${ingredientsButtonsStyles.buttons} mt-5`}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )

}

IngredientsButtons.propTypes = {
  setCurrent: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
}


export default IngredientsButtons;