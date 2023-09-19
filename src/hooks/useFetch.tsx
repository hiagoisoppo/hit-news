import { useEffect, useState } from "react";
import { NewsObject } from "../types";

interface UseFetchReturn {
  data: NewsObject[];
  isLoading: boolean;
}

function useFetch(): UseFetchReturn {
  const [data, setData] = useState<NewsObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=1000');
      const data = await response.json();
      const { items } = data;
      const polishedItems = items.map((item: NewsObject) => {
        const { imagens, data_publicacao } = item;
        const thumbUrl = `https://agenciadenoticias.ibge.gov.br/${JSON.parse(imagens).image_intro}`;
        const { day, month, hour, minute, second, year } = {
          day: Number(data_publicacao.split("/")[0]),
          month: Number(data_publicacao.split("/")[1]),
          year: Number(data_publicacao.split("/")[2].split(" ")[0]),
          hour: Number(data_publicacao.split("/")[2].split(" ")[1].split(":")[0]),
          minute: Number(data_publicacao.split("/")[2].split(" ")[1].split(":")[1]),
          second: Number(data_publicacao.split("/")[2].split(" ")[1].split(":")[2]),
        };
        const date = new Date(year, month, day, hour, minute, second);
        return {
          ...item,
          imagens: thumbUrl,
          data_publicacao: date,
        }
      });
      setData(polishedItems);
      setIsLoading(false);
    }
    fetchNews();
  }, []);

  return { data, isLoading }
}

export default useFetch;