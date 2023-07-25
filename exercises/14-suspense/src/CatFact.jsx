import axios from "axios";
// Import something here
import useSWR from "swr";

const fetchCatFacts = async (...args) => {
  const response = await axios.get(...args);
  return response.data;
};

function CatFact() {
  const { data } = useSWR("https://catfact.ninja/fact", fetchCatFacts, {
    suspense: true,
  });

  /**
   * You may need to change something here
   */
  return <blockquote>{data.fact}</blockquote>;
}

export default CatFact;
