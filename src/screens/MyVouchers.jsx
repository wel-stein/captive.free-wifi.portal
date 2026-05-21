import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { VOUCHERS } from '../data/vouchers.js';

export default function MyVouchers() {
  const [redeemed, setRedeemed] = useState({});

  return (
    <main className="pt-16 pb-28 px-container-margin-mobile max-w-md mx-auto w-full">
      {/* Hero */}
      <section className="mb-8 mt-4">
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">My Vouchers</h2>
            <p className="text-on-surface-variant max-w-[240px]">
              Exclusive rewards for your loyal journeys with Express Bus.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Icon name="local_activity" className="!text-[160px]" />
          </div>
        </div>
      </section>

      {/* Active list */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline-sm text-headline-sm">Current Vouchers</h3>
          <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-md text-label-md">
            {VOUCHERS.length} Active
          </span>
        </div>

        <div className="space-y-4">
          {VOUCHERS.map((v) => {
            const isRedeemed = !!redeemed[v.id];
            return (
              <Link
                key={v.id}
                to={`/vouchers/${v.id}`}
                className="voucher-card-shadow bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col group transition-transform duration-200 active:scale-[0.98] block"
              >
                <div className="p-4 flex gap-4">
                  <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg flex-shrink-0">
                    <Icon name={v.icon} className="text-primary !text-3xl" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">{v.title}</h4>
                    <p className="text-on-surface-variant text-body-md mt-1">{v.subtitle}</p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Icon name="event" className="!text-[18px]" />
                    <span className="font-label-md text-label-md">{v.expires}</span>
                  </div>
                  <button
                    type="button"
                    disabled={isRedeemed}
                    onClick={(e) => {
                      e.preventDefault();
                      setRedeemed((r) => ({ ...r, [v.id]: true }));
                    }}
                    className={`px-6 py-2 rounded-full font-label-md text-label-md min-h-[40px] flex items-center justify-center font-bold transition-opacity ${
                      isRedeemed
                        ? 'bg-secondary text-on-secondary opacity-60 cursor-not-allowed'
                        : 'bg-primary-container text-on-primary hover:opacity-90'
                    }`}
                  >
                    {isRedeemed ? 'Redeemed!' : 'Redeem'}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Loyalty banner */}
      <section className="mt-12">
        <div className="bg-primary-container p-6 rounded-2xl text-on-primary flex flex-col items-center text-center">
          <img
            alt="Modern bus interior"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNQe2qPIRqTG0LxkC_LAaMWOzJUyrUGx8Aa7P-KSsifRLEPRpjPn4y7JvAsvc4zVmbEQR0ufAhs2yaSTKO5oPtfF2kZH_Z-UrUF5zH4MvyeRmnO3FULr9k8Zwrjsp_jyQKEhAh-aC0XqVHRVklv1T7x4dSnEVposwD3gsAbjVuKbNj3WAv9aaOqQzlskPHaqFG2dwrWtdJBAZNAICBHnGYw58C42hAVT8PMqliUP7aav872bZunE84OY4Vf74AliAmK4GQWuoJXaM"
            className="w-full h-40 object-cover rounded-xl mb-4 shadow-sm"
          />
          <h4 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">
            Travel More, Save More
          </h4>
          <p className="text-body-md mb-6 opacity-90">
            Collect miles on every trip and unlock exclusive premium vouchers automatically.
          </p>
          <button
            type="button"
            className="w-full bg-surface text-primary font-bold py-4 rounded-xl hover:bg-surface-container transition-colors"
          >
            Learn about Loyalty Program
          </button>
        </div>
      </section>
    </main>
  );
}
