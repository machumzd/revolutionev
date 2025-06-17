export const GA_ID = 'GTM-TWMN4XJV'; // your GA4 ID

declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
