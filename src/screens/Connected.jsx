import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function Connected() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/magazine');
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, navigate]);

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-container-margin-mobile pt-touch-target-min pb-32 success-bg-gradient">
      <div className="w-full max-w-md text-center animate-fade-slide-up">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full shadow-lg float-animation">
          <Icon name="check_circle" filled className="text-on-primary !text-5xl" />
        </div>

        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">
          You're Connected!
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12">
          High-speed browsing is now enabled for your journey.
        </p>

        <button
          type="button"
          onClick={() => navigate('/magazine')}
          className="w-full bg-primary text-on-primary font-title-md text-title-md py-4 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3 h-14"
        >
          <span>Read Express Bus Magazine</span>
          <Icon name="arrow_forward" />
        </button>
        <p className="mt-6 font-body-md text-body-md text-outline">
          Redirecting to portal in {countdown} second{countdown === 1 ? '' : 's'}...
        </p>

        <div className="mt-12 w-full grid grid-cols-2 gap-4 opacity-90">
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex items-center gap-3">
            <Icon name="schedule" className="text-primary" />
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">ETA</span>
              <span className="font-body-md text-body-md font-bold">14:45</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex items-center gap-3">
            <Icon name="thermostat" className="text-primary" />
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Cabin</span>
              <span className="font-body-md text-body-md font-bold">22°C</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
