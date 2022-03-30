import { FC } from 'react';

export interface IModalComponentProps {
    showModal: boolean;
    handleShowModal: () => void;
}
const ModalComponent: FC<IModalComponentProps> = ({ showModal, handleShowModal }) => {
    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div
                    onClick={() => handleShowModal()}
                    className={`fixed inset-0 transition-opacity  backdrop-blur-sm ${
                        showModal
                            ? 'duration-300 ease-out opacity-100'
                            : 'ease-in duration-200 opacity-0'
                    }`}
                    aria-hidden="true"
                />

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                ></span>

                <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white">
                        <div className="p-8 bg-[#F4F5F9]">
                            <div className="text-xs font-light text-gray-500">
                                Hi Julia! Welcome to Lumineer!
                            </div>
                            <div className="font-semibold">Please set your preferences</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
