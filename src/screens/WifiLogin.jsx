import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function WifiLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | connecting | done

  const handleConnect = () => {
    const value = email.trim().toLowerCase();
    if (!value.includes('@') || !value.endsWith('.com')) {
      setError('Please enter a valid email ending in .com');
      return;
    }
    setError('');
    setStatus('connecting');
    setTimeout(() => {
      setStatus('done');
      navigate('/connected');
    }, 1200);
  };

  return (
    <main className="flex-grow pt-touch-target-min pb-24 px-container-margin-mobile flex flex-col items-center justify-center hero-gradient">
      <div className="max-w-md w-full space-y-8 animate-fade-slide-up">
        {/* Hero */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-6 rounded-full bg-primary-fixed text-primary shadow-sm border border-outline-variant">
            <Icon name="wifi" className="!text-5xl" />
          </div>
          <div className="space-y-2">
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
              Get Connected
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[320px] mx-auto">
              Enter your email to access free high-speed WiFi during your journey.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="font-label-sm text-label-sm text-on-surface-variant ml-1 block"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-14 px-4 rounded-lg bg-surface-container-low border-2 outline-none transition-all text-on-surface font-body-md focus:border-primary ${
                  error ? 'border-error' : 'border-outline-variant'
                }`}
              />
              {error && (
                <p className="text-error text-sm font-label-sm mt-1">{error}</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleConnect}
              disabled={status === 'connecting'}
              className={`w-full h-14 rounded-lg font-title-md text-title-md shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
                status === 'done'
                  ? 'bg-green-600 text-white'
                  : 'bg-primary text-on-primary hover:opacity-90 disabled:opacity-80'
              }`}
            >
              {status === 'connecting' ? (
                <>
                  Connecting...
                  <Icon name="progress_activity" className="animate-spin" />
                </>
              ) : status === 'done' ? (
                'Connected'
              ) : (
                'Connect to WiFi'
              )}
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-primary-fixed/30 rounded-lg">
            <Icon name="info" className="text-primary shrink-0" />
            <p className="font-body-md text-sm text-on-surface-variant leading-tight">
              Simple email verification is required. Make sure your email address ends in{' '}
              <b>.com</b> for instant authentication.
            </p>
          </div>
        </div>

        {/* Status chip */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed/50 border border-outline-variant rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
              System Ready
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
