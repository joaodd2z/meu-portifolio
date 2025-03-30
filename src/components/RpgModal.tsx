'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RpgChat from './RpgChat';

interface RpgModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function RpgModal({ isOpen, onClose, children }: RpgModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-4xl p-4"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 bg-[#D4AF37] hover:bg-[#B38F2E] text-[#1A0F0A] w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-lg"
                    >
                        X
                    </button>
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
} 