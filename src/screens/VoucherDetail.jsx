import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { getVoucher } from '../data/vouchers.js';

function QrPattern() {
  const cells = useMemo(
    () => Array.from({ length: 100 }, () => Math.random() > 0.5),
    [],
  );
  return (
    <div className="w-48 h-48 bg-white p-2 rounded-xl border-4 border-surface-container-highest relative overflow-hidden flex items-center justify-center mb-6">
      <div className="grid grid-cols-10 gap-1 w-full h-full opacity-80">
        {cells.map((on, i) => (
          <div key={i} className={`w-full h-full ${on ? 'bg-primary' : 'bg-transparent'}`} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon name="directions_bus" className="text-primary !text-5xl" />
      </div>
    </div>
  );
}

export default function VoucherDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const voucher = getVoucher(id);
  const [termsOpen, setTermsOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);

  if (!voucher) {
    return (
      <main className="pt-touch-target-min pb-32 px-container-margin-mobile flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-on-surface-variant">Voucher not found.</p>
        <button
          type="button"
          onClick={() => navigate('/vouchers')}
          className="mt-4 text-primary font-bold underline"
        >
          Back to My Vouchers
        </button>
      </main>
    );
  }

  return (
    <>
      {/* Top nav (replaces shared TopAppBar) */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-surface flex justify-between items-center px-container-margin-mobile h-touch-target-min border-b border-outline-variant">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors active:scale-95"
        >
          <Icon name="arrow_back" className="text-primary" />
        </button>
        <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          Voucher Detail
        </span>
        <button
          type="button"
          aria-label="Share"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors active:scale-95"
        >
          <Icon name="share" className="text-primary" />
        </button>
      </nav>

      <main className="pt-touch-target-min pb-32">
        {/* Hero */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={voucher.image}
            alt={voucher.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-4 left-container-margin-mobile">
            <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              {voucher.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-container-margin-mobile -mt-8 relative z-10">
          {/* Header card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant">
            <div className="flex justify-between items-start mb-4 gap-3">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                {voucher.title}
              </h1>
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                <Icon name={voucher.headerIcon} filled className="text-primary" />
              </div>
            </div>
            <p className="text-on-surface-variant font-body-lg mb-6">{voucher.description}</p>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="calendar_today" className="text-primary !text-[20px]" />
                <span className="text-on-surface-variant font-label-sm">{voucher.endsLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="location_on" className="text-primary !text-[20px]" />
                <span className="text-on-surface-variant font-label-sm">{voucher.locations}</span>
              </div>
            </div>
          </div>

          {/* Bento info grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="col-span-2 md:col-span-1 bg-surface-container-low p-6 rounded-xl border border-outline-variant">
              <h2 className="font-title-md text-title-md text-primary mb-3 flex items-center gap-2">
                <Icon name="info" />
                Details
              </h2>
              <p className="text-on-surface-variant font-body-md">{voucher.longDescription}</p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-primary-fixed p-6 rounded-xl border border-outline-variant">
              <h2 className="font-title-md text-title-md text-on-primary-fixed-variant mb-3 flex items-center gap-2">
                <Icon name="stars" />
                Exclusive
              </h2>
              <p className="text-on-primary-fixed-variant opacity-80 font-body-md">
                This offer is exclusively available for Express Bus Gold and Platinum tier travelers.
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 border-t border-outline-variant pt-6">
            <button
              type="button"
              className="w-full flex justify-between items-center py-2"
              onClick={() => setTermsOpen((o) => !o)}
              aria-expanded={termsOpen}
            >
              <h2 className="font-title-md text-title-md text-on-surface">Terms &amp; Conditions</h2>
              <Icon
                name="expand_more"
                className="text-outline transition-transform duration-300"
                style={{ transform: termsOpen ? 'rotate(180deg)' : 'rotate(0)' }}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: termsOpen ? '320px' : '0px' }}
            >
              <ul className="py-4 space-y-3 text-on-surface-variant font-body-md list-disc pl-5">
                <li>Valid only for registered Express Bus app users.</li>
                <li>One voucher per customer per day.</li>
                <li>Not valid in conjunction with other promotions.</li>
                <li>QR code must be presented at the time of purchase.</li>
                <li>Valid at participating locations only.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom action bar — sits above the global BottomNavBar */}
      <div className="fixed bottom-[72px] left-0 w-full glass-panel p-container-margin-mobile border-t border-outline-variant z-30">
        <div className="max-w-[1200px] mx-auto">
          <button
            type="button"
            onClick={() => setShowQr(true)}
            className="w-full h-14 bg-primary-container text-on-primary rounded-xl font-title-md text-title-md flex items-center justify-center gap-3 active:scale-95 transition-all shadow-md hover:brightness-110"
          >
            <Icon name="qr_code_2" />
            Generate QR Code
          </button>
        </div>
      </div>

      {/* QR Modal */}
      {showQr && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            onClick={() => setShowQr(false)}
          />
          <div className="relative w-full max-w-sm bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl animate-fade-slide-up">
            <div className="qr-gradient p-8 text-center text-on-primary">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-1">Scan to Redeem</h3>
              <p className="font-label-sm opacity-90">Valid for 15:00 minutes</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <QrPattern />
              <div className="text-center mb-8">
                <p className="font-headline-lg-mobile text-primary tracking-widest mb-1">
                  {voucher.code}
                </p>
                <p className="text-on-surface-variant text-label-sm">
                  Show this code to the merchant
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="w-full py-4 text-primary font-title-md border border-outline-variant rounded-xl hover:bg-surface-container transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
