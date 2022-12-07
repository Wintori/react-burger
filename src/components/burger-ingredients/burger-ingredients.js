import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import data from '../../utils/data'
import './burger-ingredients.css'

export default class BurgerIngredients extends React.Component {

    IngredientsButtons = () => {
        const [current, setCurrent] = React.useState('one')
        return (
          <div className='ingredients__buttons mt-5'>
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
      };
    
    render() {
        return (
            <section className='ingredients'>
                
                <p className="text text_type_main-large mt-10">
                    Соберите бургер
                </p>
                <this.IngredientsButtons/>
                <div className='ingredients__content mt-10'>   
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                    <ul className='ingredients__list'>
                        <li className='ingredients__item'>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img className='ingredients__image' src= {data.data[0].image}></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Краторная булка N-200i
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src='https://code.s3.yandex.net/react/code/bun-01.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Флюоресцентная булка R2-D3
                            </p>
                        </li>
                    </ul>

                    <p className="text text_type_main-medium mt-10">
                        Соусы
                    </p>
                    <ul className='ingredients__list'>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src= 'https://code.s3.yandex.net/react/code/sauce-02.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус Spicy-X
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src='https://code.s3.yandex.net/react/code/sauce-04.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус фирменный Space Sauce
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img className='ingredients__image' src= 'https://code.s3.yandex.net/react/code/sauce-03.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">15</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус традиционный галактический
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src='https://code.s3.yandex.net/react/code/sauce-01.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">88</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус с шипами Антарианского плоскоходца
                            </p>
                        </li>



                        <li className='ingredients__item'>
                            <img className='ingredients__image' src= 'https://code.s3.yandex.net/react/code/sauce-02.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус Spicy-X
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src='https://code.s3.yandex.net/react/code/sauce-04.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус фирменный Space Sauce
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img className='ingredients__image' src= 'https://code.s3.yandex.net/react/code/sauce-03.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">15</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус традиционный галактический
                            </p>
                        </li>
                        <li className='ingredients__item'>
                            <img className='ingredients__image' src='https://code.s3.yandex.net/react/code/sauce-01.png'></img>
                            <div className='ingredients__price mt-1 mb-1'>
                                <p className="text text_type_digits-default mr-2">88</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default ingredients__name">
                                Соус с шипами Антарианского плоскоходца
                            </p>
                        </li>


                        
                    </ul>
                </div>

            </section>
        );
    }
}