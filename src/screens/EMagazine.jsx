import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGkuFM6InHvBXlaO9-Vq1IAsDQdjnLavuZpXp94qHMcgljwfEQd1UWk7D3JkrF_6murIOTde-Axf2G1ITXX_Uc2to2bcpLc-LmcDQ21L9zOH6z0Bnl9iscfKhG5AK4Vq2CZnSPcjW_wQ-W9eykIlZKAegYwYKXHDAljPYLMbXsb91bP7bMl_f9QUiK6FBhB6ytgxAIM0DwDH3zMfrRMfcSKVeBsqPDaTltxqRbg5x51F-8j6LEqJXFqEebgDJf2gJPOas8nyfV78';
const ARTICLES_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCi6YFw9k_T5fmucSPo8SHw0-DbYRyjduJK82zQibFtGnRllNzLuEiJhF0RhoqcLG9PSgXiIZqSMV5dyEx1GyfAjnhk8jQpvvNyhx2ZXmj67JpI7m3DkXWHHv5pyRlwCEO35C7MKzA-vlNEOnU9lSaNLcd3_Z_VebzAbQqeBdOB4ztnjRS9cpoKYA-VUhosf648EAZE-7IWKBnKDqJgvKoDUCj_zf_jyHu0DztWw4c6skljCLwSjZcWivFS7e7mvRbUehFXxqwww0A';
const GALLERY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5I2UZBfcVavo7GGh6gfpdyPXRh1LFuZh_2YAXiUWlY95SNgOG0-HNqTu75oQT1iwarPUoebq7OBnIiXraSG8DXKNQ8Y38O49cIEzuDecsIL6rIvW2sUvk07MVJYLBdVWioHmvgq6nXw7IBq0yjMKNNOur7A5Qq99WFIAvN9v_TxAOHKSlZPQhQ6pJTSHNzjAYfsfTIV5ZQ0KXilCWUXPu-gnx6NgSbZFDRS_lwR_TzvR9kPsqhJBjm4RznZq2fNJtTKAu9ztfXnQ';
const VOUCHERS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAdw9EhdtJswQvQ9m497J03ri_tyIiwymA7_Pc-ufQLuK-xXPFM92qPoZZ6gKmjqLbhEypQ41bo6VzQ6BCEn0giML0gVsUEngMjQnCrsteiMuwdChkPZv9fbhw-YJAuh2QBbCy-ndWf9QTgaE8s1e_V4RD26R5zqT_NEjJ67oUXMKZcaGF4X-9wbXNAAhxJ2a6G8NEozeHf67Uom2HeO0x5-kP6m24mIzbwnGwb1TbLXU5EBIAm3EXG8Adf4_gyOcowWtyG-PKJs5A';

const TRENDING = [
  {
    category: 'Sports',
    title: 'The Marathon Journey',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeX6ZPyt0Xo7fR_2Ztb0vGjnwyHYT9R_QgTXkNJ2odH12qIgOEnAINwxIFMC-DXob7mBcCiu3vwOaWeoIKRHECpGEwyB6KICWKlhO4xvGxv0QcO0OpAR15mVjwQZZlagXpMSr8Fvy-C4qLN3ZSUIWMPTZQot2Cf8vZuvLQMlSj5g4MaqzDC1Ax-ORHKYsh8htrOPd1g2L13CYSvQmnQQIJA7F6RiwQlclOXLWbchXxiAIcgVQylx4lH-zNzf_eVdOcUuPdfeUViGU',
  },
  {
    category: 'Tech',
    title: 'Remote Work Routes',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWuKaYVMmCGR9bYCEAGM7Pbts4EKYzzByfH7PDerR_HCRucm05MKu1u-inuRDUfYgvY_b6LWjOzTMOF0ZcCKZZxZ6S-qXgsKmgS4JJ0FgayG5t1EDkmQJDflXWSuhhKF912yms0Oxb2kKV0WqnlAQdpcdJfgekGsE91aye2wQEtk56nLldu0xamzOYalHYae0QN7oZhZTh-cs2846HXx3iPWdy25V4FE4auxPkExHHjOXLYC_7XdVQ3H2-6QZW4cw5UstuNiyABOI',
  },
  {
    category: 'Travel',
    title: 'Hidden Lakes 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdOyd3wH9wzaSn8odrCYGf38AHUjzn1VBLvy-c9LDzdu2SSLS-xoPWgvx4mS25smwytbh0POYfVJ3qbQmDnLuqN3UXE7UQUuhKa1VC6eddsWLs4IwXyV6lk6ep-LVq3HuAwM4rPJVEFA5pVSfSMQ3BxeEfcsqiIg0f5yfiSu10urx7bx42N7Zy4-xhiKb4uhHg0GQa3Owk0oDrWWjTx6R8533CdL5mSb5GEsQHYJrPAgriiG-QD4wIPgMD9g4ufdjV2llOtw6WJQ0',
  },
];

export default function EMagazine() {
  const navigate = useNavigate();
  return (
    <main className="max-w-[1200px] mx-auto px-container-margin-mobile pt-16 pb-28 w-full">
      {/* Hero */}
      <section className="mb-8 mt-4">
        <div className="relative overflow-hidden rounded-xl bg-primary h-[280px] md:h-[320px] flex flex-col justify-end p-6 md:p-8 text-on-primary">
          <img
            src={HERO_IMG}
            alt="Express bus on coastal highway at golden hour"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="relative z-10">
            <h2 className="font-display-lg text-[32px] md:text-display-lg leading-tight mb-2">
              Express Bus e-Mag
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg max-w-xl opacity-90">
              Your premium travel companion. Dive into exclusive stories, curated visuals, and rewards while you move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Articles feature */}
        <section className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-md transition-all duration-300">
          <div className="h-56 md:h-64 overflow-hidden">
            <img
              src={ARTICLES_IMG}
              alt="Editorial magazine flat lay"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm mb-2">
                  Feature Story
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Exclusive Articles</h3>
              </div>
              <Icon name="auto_stories" className="text-primary !text-3xl" />
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md mb-6 max-w-prose">
              In-depth interviews with urban architects, destination guides for the modern nomad, and technology trends shaping the future of transit.
            </p>
            <button
              type="button"
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-title-md text-title-md hover:bg-primary-container transition-colors min-h-[48px] flex items-center gap-2 group"
            >
              Read Now
              <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Gallery */}
        <section className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant hover:shadow-md transition-all duration-300 flex flex-col">
          <div className="flex-grow h-44 overflow-hidden">
            <img
              src={GALLERY_IMG}
              alt="Gallery of travel landscapes"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-6">
            <Icon name="collections" className="text-primary mb-2" />
            <h3 className="font-title-md text-title-md mb-2 text-on-surface">Interactive Galleries</h3>
            <p className="text-on-surface-variant font-body-md text-body-md mb-4">
              A visual journey through the hidden gems of our route network.
            </p>
            <a
              href="#"
              className="text-primary font-bold flex items-center gap-1 hover:underline"
            >
              Explore Media
              <Icon name="chevron_right" className="!text-base" />
            </a>
          </div>
        </section>

        {/* Vouchers banner */}
        <section
          className="md:col-span-12 relative overflow-hidden rounded-xl bg-primary-fixed border border-primary-container/20 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 group cursor-pointer"
          onClick={() => navigate('/vouchers')}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="local_activity" className="text-primary !text-4xl" />
              <h3 className="font-display-lg text-headline-lg md:text-display-lg text-on-primary-fixed leading-tight">
                FREE Vouchers
              </h3>
            </div>
            <p className="text-on-primary-fixed-variant font-body-lg text-body-md md:text-body-lg mb-6">
              Exclusive discounts for local cafes, attractions, and hotels waiting at your next stop. Updated daily for our commuters.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-4 md:px-6 py-3 rounded-xl border border-white/40 flex items-center gap-3">
                <Icon name="coffee" className="text-primary" />
                <span className="font-bold text-primary">50% Off City Brews</span>
              </div>
              <div className="glass-card px-4 md:px-6 py-3 rounded-xl border border-white/40 flex items-center gap-3">
                <Icon name="hotel" className="text-primary" />
                <span className="font-bold text-primary">Stay-2-Pay-1 Deals</span>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 aspect-square max-h-[240px] rounded-2xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img
              src={VOUCHERS_IMG}
              alt="Smartphone showing a digital voucher"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* Trending */}
      <section className="mt-12 mb-8">
        <h4 className="font-title-md text-title-md text-on-surface mb-6">Trending Now</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {TRENDING.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-low p-4 rounded-xl flex gap-4 items-center hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/30"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src={card.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-primary">{card.category}</p>
                <h5 className="font-title-md text-[16px] leading-tight font-bold">{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
