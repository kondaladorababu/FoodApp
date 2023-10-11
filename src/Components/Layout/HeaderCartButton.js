import CardIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    // const handleCard = ()=>{
    //     props.onClick(true);
    // }

    return (
        <button  onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {300}
            </span>
        </button>
    );

}
export default HeaderCartButton;