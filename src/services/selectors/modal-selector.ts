import { RootState } from "../store";

export const getStatusModal = (state: RootState) => state.modal.isOpen;
export const getTypeModal = (state: RootState) => state.modal.modalType;
