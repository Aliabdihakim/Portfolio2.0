"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ReusableDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
  description: string | null;
};

const ReusableDialog: React.FC<ReusableDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-h-[300px] max-w-2xl md:px-12">
        <DialogHeader>
          <DialogTitle className="text-3xl pb-8">{title}</DialogTitle>
          <DialogDescription className="text-base leading-8">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
