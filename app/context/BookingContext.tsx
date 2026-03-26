"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

export interface CarData {
  id: number;
  name: string;
  image: string;
  price: string;
  fuel: string;
  seats: number;
  type: string;
  tag: string;
  priceNum?: number; // numeric price per day for calculations
}

interface BookingContextType {
  isOpen: boolean;
  selectedCar: CarData | null;
  openBooking: (car?: CarData) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

  // Handle body overflow with useEffect to avoid SSR issues
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  const openBooking = useCallback((car?: CarData) => {
    setSelectedCar(car ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setSelectedCar(null);
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, selectedCar, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
