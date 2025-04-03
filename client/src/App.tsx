import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Varieties from "@/pages/varieties";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import { GamePopup } from "@/components/ui/game-popup";

import { CartProvider } from "./context/CartContext";
import React, { useState, useEffect } from 'react';


export default function App() {
  return (
    <CartProvider>
      <GamePopup />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/varieties" component={Varieties} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </CartProvider>
  );
}