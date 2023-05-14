import {BsTrash} from "react-icons/bs";
import BackgroundCircle from "../backgrounCircle/backgroundCircle";

interface Props {
    color: string,
    backgroundColor: string
}

const Trash = ({color, backgroundColor}: Props) => {
    return (
        <BackgroundCircle backgroundColor={backgroundColor}>
            <BsTrash color={color}/>
        </BackgroundCircle>
    );
};

export default Trash;