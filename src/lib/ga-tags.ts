export const GA_MEASUREMENT_ID = 'G-XKSH07EPFZ'
type EventPayload = {
  [key: string]: unknown;
};

type EventItem = {
  event: string;
  payload: EventPayload;
};

export { };

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const eventQueue: EventItem[] = [];

const isLoaded = () => {
  return typeof window !== 'undefined' && Array.isArray(window.dataLayer);
};

export const flushQueue = () => {
  while (eventQueue.length > 0 && isLoaded()) {
    const { event, payload } = eventQueue.shift()!;
    window.dataLayer.push({ event, ...payload });
  }
};

export const track = (event: string, payload: EventPayload = {}) => {
  if (isLoaded()) {
    flushQueue();
    window.dataLayer.push({ event, ...payload });
  } else {
    eventQueue.push({ event, payload });
  }
};
