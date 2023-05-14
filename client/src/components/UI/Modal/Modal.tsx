import { ReactNode } from "react";
import style from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";

interface Props {
  children: ReactNode;
  onClose: () => void;
  isActive: boolean;
  title: string;
}

const Modal = ({ children, onClose, isActive, title }: Props) => {
  return (
    <>
      {isActive && (
        <div className={style.modal} onClick={() => onClose()}>
          <div className={style.content} onClick={(e) => e.stopPropagation()}>
            <div className={style.header}>
              <div className={style.title}>{title}</div>
              <div className={style.cross} onClick={() => onClose()}>
                <RxCross2 size={"40"} />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
