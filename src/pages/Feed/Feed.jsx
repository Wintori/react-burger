import React from 'react';
import Styles from './Feed.module.scss'

const Feed = () => {
    return (
        <div className={Styles.block}>
            <p className="text text_type_main-large mb-4">
                Лента заказов
            </p>
            <div className={Styles.content}>
                <ul className={`${Styles.list} pr-2`}>

                </ul>
                <div>
                    <div className={Styles.orders}>
                        <div className={`${Styles.orderBlock}mr-9`}>
                            <p className="text text_type_main-medium mb-6">
                                Готовы:
                            </p>
                            <ul>

                            </ul>
                        </div>
                        <div>
                            <p className="text text_type_main-medium mb-6">
                                В работе:
                            </p>
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <p className="text text_type_main-medium mt-15">
                        Выполнено за все время:
                    </p>
                    <p className="text text_type_digits-large">28752</p>
                    <p className="text text_type_main-medium mt-15">
                        Выполнено за сегодня:
                    </p>
                    <p className="text text_type_digits-large">138</p>
                </div>
            </div>
        </div>
    );
};

export default Feed;