import axios from "axios";

import useSWR from "swr";

// asynchronous function that fetches from the API and returns the API response as an object

const fetchCatFacts = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function CatFact() {
  // {data} is the return value of the fetcher function
  // calls the API fetcher function
  const { data } = useSWR("https://catfact.ninja/fact", fetchCatFacts, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });

  /**
   * You may need to change something here
   */
  return <blockquote>{data.fact}</blockquote>;
}

export default CatFact;
