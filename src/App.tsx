import React, { useState } from 'react';
import { FLAVORS } from './data/flavors';
import { Flavor, CartItem, OrderFormState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMelinda } from './components/AboutMelinda';
import { FlavorMenu } from './components/FlavorMenu';
import { CustomBoxBuilder } from './components/CustomBoxBuilder';
import { HowItWorks } from './components/HowItWorks';
import { CustomOrderInquiry } from './components/CustomOrderInquiry';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { Check } from 'lucide-react';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [primedFlavorForBox, setPrimedFlavorForBox] = useState<Flavor | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<{
    items: CartItem[];
    form: OrderFormState;
    total: number;
  } | null>(null);

  // Cart starts with a sample half-dozen birthday confetti box so visitors immediately see how simple it is
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'sample-confetti-pack',
      type: 'dozen',
      title: 'Classic Birthday Confetti (Dozen)',
      subtitle: '12 homemade pops · Golden vanilla & rainbow crunch',
      price: 32.0,
      quantity: 1,
      flavorId: 'confetti-birthday',
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddHalfDozen = (flavor: Flavor) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.type === 'half-dozen' && item.flavorId === flavor.id
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `half-dozen-${flavor.id}-${Date.now()}`,
        type: 'half-dozen',
        title: `${flavor.name} (6-Pack)`,
        subtitle: 'Half-dozen hand-dipped pops',
        price: flavor.priceHalfDozen,
        quantity: 1,
        flavorId: flavor.id,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    showToast(`Added 6-Pack of ${flavor.name} to your bag`);
  };

  const handleAddDozen = (flavor: Flavor) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.type === 'dozen' && item.flavorId === flavor.id
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `dozen-${flavor.id}-${Date.now()}`,
        type: 'dozen',
        title: `${flavor.name} (Dozen)`,
        subtitle: '12 handcrafted pops · Kraft gift box',
        price: flavor.priceDozen,
        quantity: 1,
        flavorId: flavor.id,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    showToast(`Added 1 Dozen ${flavor.name} to your bag`);
  };

  const handleAddCustomBox = (box: {
    sizeName: string;
    totalCount: number;
    price: number;
    items: { flavorId: string; name: string; count: number }[];
  }) => {
    const summaryFlavors = box.items
      .map((item) => `${item.name.split(' ')[0]} (${item.count})`)
      .join(' · ');

    const newItem: CartItem = {
      id: `custom-box-${Date.now()}`,
      type: 'custom-box',
      title: box.sizeName,
      subtitle: summaryFlavors,
      price: box.price,
      quantity: 1,
      boxFlavors: box.items,
    };

    setCartItems((prev) => [...prev, newItem]);
    showToast(`Added ${box.sizeName} to your bag`);
  };

  const handleSelectForCustomBox = (flavor: Flavor) => {
    setPrimedFlavorForBox(flavor);
    handleNavigate('box-builder');
    showToast(`Selected ${flavor.name} in Box Builder`);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSuccess = (orderData: {
    items: CartItem[];
    form: OrderFormState;
    total: number;
  }) => {
    setCompletedOrder(orderData);
    setCartItems([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#382923] selection:bg-amber-200 selection:text-amber-950">
      
      {/* Top Header & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Cozy Home Bakery Hero */}
        <Hero
          onExploreFlavors={() => handleNavigate('flavors')}
          onMeetMelinda={() => handleNavigate('about-melinda')}
          onBuildBox={() => handleNavigate('box-builder')}
        />

        {/* Dedicated Section: Melinda Runs The Entire Business */}
        <AboutMelinda />

        {/* Small-Batch Homemade Flavor Menu */}
        <FlavorMenu
          onAddHalfDozen={handleAddHalfDozen}
          onAddDozen={handleAddDozen}
          onSelectForCustomBox={handleSelectForCustomBox}
        />

        {/* Mix & Match Box Builder */}
        <CustomBoxBuilder
          onAddCustomBox={handleAddCustomBox}
          primedFlavor={primedFlavorForBox}
        />

        {/* The Home Ordering & Porch Pickup Process */}
        <HowItWorks />

        {/* Custom Event Themes & Inquiries */}
        <CustomOrderInquiry />

        {/* Common Questions */}
        <FaqSection />
      </main>

      {/* Footer & Cottage Food Disclosure */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-out Order Bag Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Confirmation Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#422D24] text-amber-50 text-xs py-3 px-4.5 rounded-2xl shadow-2xl border border-amber-900/50 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-4 h-4 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
