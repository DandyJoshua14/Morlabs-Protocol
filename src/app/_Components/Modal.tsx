import React, { useEffect } from "react"
import { ReactPortal } from "./ReactPortal"

interface ModalProps {
    children?: React.ReactNode
    isOpen: boolean
    handleClose: () => void
}

export const Modal = ({
    children, isOpen, handleClose
}: ModalProps) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white font-bold text-3xl p-6 text-black rounded-xl max-w-xl flex justify-center items-center gap-x-3 w-full text-center">
                {children}
            </div>
        </div>
    )
}