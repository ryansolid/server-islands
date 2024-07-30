const API_ENDPOINT = "https://meek-gumption-c04779.netlify.app/vacations";

type APIPart = "reviews" | "recommendations" | "rooms";

async function withDelay<T>(promise: Promise<T>, delay: number): Promise<T> {
  // Ensure we throw if this throws
  const ret = await promise;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ret);
    }, delay);
  });
}

export const fetchAPI = (part: APIPart, delay: number) =>
  withDelay(
    fetch(API_ENDPOINT + "?part=" + part).then((res) => res.json()),
    delay
  );
