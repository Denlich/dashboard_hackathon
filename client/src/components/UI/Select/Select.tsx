import style from "./select.module.css";
import "bootstrap"

interface Props {
    options: string[]
    label: string,
    onChange: (value: string) => void
}


const Select = ({options, label, onChange}: Props) => {
    return (
        <div>
            <span className={style.label}>{label}</span>
            <select
                className={style.select}
                onChange={(e) => onChange(e.target.value)}
                aria-label=".form-select-lg example"
            >
                {options.map(opt =>
                    <option
                        key={opt}
                        value={opt}
                        className={style.option}
                    >
                        {opt}
                    </option>)
                }
            </select>
        </div>
    );
};


export default Select;