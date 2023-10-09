import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>YuFood
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a Table full of meals"></img>
            </div>
        </Fragment>
    )
}

export default Header;