interface WeatherApiResponse {
    current: {
        temp_c: number;
    };
}

export async function getTemperature(): Promise<number | null> {
    try {
        const apiKey = process.env.WEATHER_API_KEY?.trim();

        if (!apiKey) {
            return null;
        }
        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=brasilia&aqi=no`,
            {
                next: { revalidate: 60 },
            }
        );
        if (!res.ok) {
            return null;
        }
        const data: WeatherApiResponse = await res.json();
        return data.current.temp_c;
    } catch (error) {
        return null;
    }
}
