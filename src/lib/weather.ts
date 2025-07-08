interface WeatherApiResponse {
  current: {
    temp_c: number;
  };
}

export async function getTemperature(): Promise<number | null> {
  try {
    const apiKey = process.env.WEATHER_API_KEY?.trim();

    if (!apiKey) {
      console.error(" API key não definida. F");
      return null;
    }

    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=brasilia&aqi=no`
    );

    if (!res.ok) {
      console.error(` Erro na resposta da API: ${res.statusText}`);
      return null;
    }

    const data: WeatherApiResponse = await res.json();
    return data.current.temp_c;
  } catch (error) {
    console.error("fez merda ao buscar temperatura:", error);
    return null;
  }
}
