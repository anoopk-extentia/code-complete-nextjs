import SvgIconComponent from 'components/svg-icon/svg-icon.component';
import styles from './pill-checkbox.module.css';

const PillCheckboxComponent = (): JSX.Element => {
    return (
        <label className={styles.pillListItem} htmlFor="feature">
            <input type="checkbox" name="feature" id="feature" value="1" />
            <span className={styles.pillListLabel}>
                Oncology
                <span className={`${styles.icon} ${styles.iconCheckLight} ${styles.iconSmallest}`}>
                    <SvgIconComponent icon="TickIcon" className="w-3 h-3" />
                </span>
            </span>
        </label>
    );
};

export default PillCheckboxComponent;
