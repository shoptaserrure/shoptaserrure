import React from 'react';
import { Phone } from 'lucide-react';

const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/80 backdrop-blur-sm border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <a
        href="tel:0620546693"
        data-cta="call-sticky"
        className="flex items-center justify-center gap-3 w-full bg-brand-green hover:bg-brand-green/90 text-white py-4 rounded-xl font-extrabold text-lg shadow-lg transition-all active:scale-[0.98] animate-[pulse_3s_infinite]"
      >
        <Phone className="size-6" />
        <span>Appeler maintenant</span>
      </a>
    </div>
  );
};

export default StickyCallBar;
