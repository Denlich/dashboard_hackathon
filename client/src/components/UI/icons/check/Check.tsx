import {AiOutlineCheck} from "react-icons/ai";
import BackgroundCircle from "../backgrounCircle/backgroundCircle";


interface Props {
    color: string,
    backgroundColor: string
}

const Check = ({color, backgroundColor}: Props) => {
    return (
        <BackgroundCircle backgroundColor={backgroundColor}>
            <AiOutlineCheck color={color} size="20px"/>
        </BackgroundCircle>
    );
};

export default Check;