import {BsPencil} from "react-icons/bs";
import BackgroundCircle from "../backgrounCircle/backgroundCircle";

interface Props {
    color: string;
    backgroundColor: string;
}

const Pencil = ({color, backgroundColor}: Props) => {
    return (
        <BackgroundCircle backgroundColor={backgroundColor}>
            <BsPencil color={color} size="15px"/>
        </BackgroundCircle>
    );
};

export default Pencil;