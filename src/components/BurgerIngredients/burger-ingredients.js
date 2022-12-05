import { Logo, Icons, Typography, Box, BurgerIcon, ListIcon, ProfileIcon, Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import data from '../../utils/data'

export default class BurgerIngredients extends React.Component {

    IngredientsButtons = () => {
        const [current, setCurrent] = React.useState('one')
        return (
          <div style={{ display: 'flex', margin: '20px 0 0 0' }}>
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
            <div>
                
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
                <this.IngredientsButtons/>
                <div style={{ height: '685px', overflowY: 'scroll', margin: '40px 0 0 0' }}>   
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                    <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'grid', gridTemplateColumns: '272px 272px', gridTemplateRows: '208px', columnGap: '24px', rowGap: '32px' }}>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img src= {data.data[0].image} style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Краторная булка N-200i
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src='https://code.s3.yandex.net/react/code/bun-01.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Флюоресцентная булка R2-D3
                            </p>
                        </li>
                    </ul>

                    <p className="text text_type_main-medium" style={{ margin: '40px 0 0 0' }}>
                        Соусы
                    </p>
                    <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'grid', gridTemplateColumns: '272px 272px', gridTemplateRows: '208px', columnGap: '24px', rowGap: '32px' }}>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src= 'https://code.s3.yandex.net/react/code/sauce-02.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус Spicy-X
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src='https://code.s3.yandex.net/react/code/sauce-04.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>30</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус фирменный Space Sauce
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img src= 'https://code.s3.yandex.net/react/code/sauce-03.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>15</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус традиционный галактический
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src='https://code.s3.yandex.net/react/code/sauce-01.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>88</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус с шипами Антарианского плоскоходца
                            </p>
                        </li>



                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img src= 'https://code.s3.yandex.net/react/code/sauce-03.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>15</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус традиционный галактический
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src='https://code.s3.yandex.net/react/code/sauce-01.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>88</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус с шипами Антарианского плоскоходца
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <Counter count={1} size="default" extraClass="m-1" />
                            <img src= 'https://code.s3.yandex.net/react/code/sauce-03.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>15</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус традиционный галактический
                            </p>
                        </li>
                        <li style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <img src='https://code.s3.yandex.net/react/code/sauce-01.png' style={{ width: '240px' }} ></img>
                            <div style={{ margin: '4px 0 4px 0', display: 'flex' }}>
                                <p className="text text_type_digits-default" style={{ margin:'0 9px 0 0' }}>88</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default" style={{ height: '-webkit-fill-available', textAlign: 'center' }}>
                                Соус с шипами Антарианского плоскоходца
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}