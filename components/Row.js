import classnames from "classnames/bind";
import styles from "./Row.module.scss";

const cx = classnames.bind(styles);

const Row = ({ 
    alignItems,
    borderBottom,
    children,
    justifyContent,
    paddingBottom,
    paddingTop
}) => {
    const rowClasses = cx({
        row: true,
        [`justify-content-${justifyContent}`]: justifyContent,
        [`align-items-${alignItems}`]: alignItems,
        [`border-bottom-${borderBottom}`]: borderBottom,
        [`padding-bottom-${paddingBottom}`]: paddingBottom,
        [`padding-top-${paddingTop}`]: paddingTop,
    });
    return (
        <div className={rowClasses}>{children}</div>
    )
};
export default Row;