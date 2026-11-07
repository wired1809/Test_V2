import React from 'react';
import { CheckCircle2, Heart, MapPin, Calendar, Clock, Phone, Sparkles } from 'lucide-react';
import { CartItem, OrderFormState } from '../types';
import { BAKERY_INFO } from '../data/bakeryInfo';

interface OrderSuccessModalProps {
  order: {
    items: CartItem[];
    form: OrderFormState;
    total: number;
  } | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const orderNumber = `MH-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FFFDF9] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-2xl space-y-6 text-left my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Success Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
            Order Request #{orderNumber}
          </span>
          <h2 className="font-serif-bakery text-2xl sm:text-3xl font-bold text-[#382923]">
            Thank You, {order.form.customerName}!
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Melinda has received your order request and will bake your fresh batch!
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-amber-900/10 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 font-bold text-stone-800">
            <span>Ordered Items</span>
            <span>Total: ${order.total.toFixed(2)}</span>
          </div>

          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-stone-700">
                <span className="truncate pr-2">
                  <strong>{item.quantity}x</strong> {item.title}
                </span>
                <span className="font-medium shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 space-y-1.5 text-stone-700">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>
                Target Date: <strong>{order.form.pickupDate || 'Earliest available (48h)'}</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Window: <strong>{order.form.pickupTime}</strong></span>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>
                Fulfillment:{' '}
                <strong>
                  {order.form.fulfillmentType === 'porch-pickup'
                    ? 'Oakwood Porch Pickup (Free)'
                    : `Local Delivery to: ${order.form.deliveryAddress}`}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* What Happens Next Steps */}
        <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/60 text-xs space-y-2">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>What happens next:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-stone-700 leading-relaxed">
            <li>
              Melinda verifies the date and sends an SMS confirmation to <strong>{order.form.customerPhone}</strong>.
            </li>
            <li>
              On your pickup day, you'll receive the exact house address and pickup station code.
            </li>
            <li>
              Your treats are fresh baked, hand-dipped, and packed in a rustic box tied with twine.
            </li>
          </ol>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#4A3228] hover:bg-[#38241C] text-white py-3.5 rounded-2xl font-bold text-xs cursor-pointer shadow-md transition-all active:scale-98"
        >
          Back to Melinda's Home Bakery
        </button>

      </div>
    </div>
  );
};
