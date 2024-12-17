"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CartHeaderProps {
  itemCount: number;
  selectedCount: number;
  onSelectAll: (checked: boolean) => void;
}

export function CartHeader({ itemCount, selectedCount, onSelectAll }: CartHeaderProps) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>
      <div className="py-4 border-b">
        <div className="flex items-center">
          <Checkbox 
            checked={itemCount > 0 && itemCount === selectedCount}
            onCheckedChange={onSelectAll}
          />
          <span className="ml-2">Select All Items</span>
        </div>
      </div>
    </>
  );
}