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
      <DialogContent className="max-w-2xl h-[60vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
