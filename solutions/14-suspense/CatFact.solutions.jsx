import axios from "axios";
// Import something here
import useSWR from "swr";

/**
 * The fetcher function returns that data instead of setting a value in state.
 */
const fetcher = (...args) => axios(...args).then((res) => res.data.fact);

function CatFact() {
  /**
   * useSWR will return an object with the key "data", which is the fact that is returned in the fetcher function above.
   */
  const { data } = useSWR("https://catfact.ninja/fact", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });
  /**
   * Changed from "fact" in state to "data" returned from useSWR above
   */
  return <blockquote>{data}</blockquote>;
}

export default CatFact;
