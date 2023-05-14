import style from "./SubjectHeader.module.css";
import { AiOutlinePlus } from "react-icons/all";
import { ReactNode, useState } from "react";
import Modal from "../../UI/Modal/Modal";

interface Props {
  quantity?: number;
  totalName?: string;
  adderName: string;
  modalTitle: string;
  children: ReactNode;
  onModalOpen: () => void;
  onModalClose: () => void;
  isActive: boolean;
}

const SubjectHeader = ({
  quantity,
  totalName,
  adderName,
  modalTitle,
  children,
  onModalOpen,
  isActive,
  onModalClose,
}: Props) => {
  return (
    <>
      <div className={style.header}>
        {totalName && (
          <div className={style.total}>
            {totalName} {quantity}
          </div>
        )}
        <div className={style.add} onClick={onModalOpen}>
          <div className={style.addName}>{adderName}</div>
          <AiOutlinePlus size="20" />
        </div>
      </div>
      <Modal isActive={isActive} onClose={onModalClose} title={modalTitle}>
        {children}
      </Modal>
    </>
  );
};

export default SubjectHeader;
