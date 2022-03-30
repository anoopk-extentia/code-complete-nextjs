/**
 * FileName: modal.component.tsx
 * Description: This file contains modal container component.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import { SvgIconComponent, ButtonComponent, PillCheckboxComponent } from 'components';

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

                <div className="relative inline-block overflow-hidden text-left align-middle lg:w-[800px] transition-all transform bg-white rounded-lg shadow-xl w-full">
                    <div className="bg-white">
                        <div className="p-8 bg-[#F4F5F9]">
                            <div className="text-xs font-light text-gray-500">
                                Hi Julia! Welcome to Lumineer!
                            </div>
                            <div className="font-semibold">Please set your preferences</div>
                        </div>
                        <div className="p-[30px] w-full">
                            <div>
                                <div className="flex justify-between mb-[26px]">
                                    <div className="flex items-center">
                                        <span className="border-r-2 border-[#DDDDDD] h-5 mr-3">
                                            <SvgIconComponent
                                                icon="DiseaseIcon"
                                                className="w-5 h-5 mr-3"
                                            />
                                        </span>
                                        <span className="text-xs">Select Disease Group</span>
                                    </div>
                                    <div className="flex items-center text-xs cursor-pointer text-orange-default">
                                        Show More
                                        <span>
                                            <SvgIconComponent
                                                icon="DownArrowOrangeIcon"
                                                className="ml-2"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <PillCheckboxComponent />
                                    <PillCheckboxComponent />
                                    <PillCheckboxComponent />
                                    <PillCheckboxComponent />
                                </div>
                                <div className="border-b-2 border-[#EEEEEE]" />
                            </div>
                            <div className="mt-[30px] flex justify-end">
                                <ButtonComponent
                                    // eslint-disable-next-line no-console
                                    onClick={() => console.log('clicked')}
                                    className="px-[30px] py-[10px]  text-orange-default rounded-lg border-2 border-orange-default text-xs mr-4"
                                >
                                    Skip
                                </ButtonComponent>

                                <ButtonComponent
                                    // eslint-disable-next-line no-console
                                    onClick={() => console.log('clicked')}
                                    className="px-[10px] py-[10px]  text-white rounded-lg bg-orange-default text-xs font-light"
                                >
                                    Save Preferences
                                </ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
