import axios from 'axios';
import { GetServerSideProps } from 'next';
import CountryInfo from '@/components/CountryInfo';

interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: { year: number; value: number }[];
}

interface Country {
  name: string;
  flagUrl: string;
  borderCountries: { countryCode: string; commonName: string }[];
  populationData: PopulationData;
}

interface Props {
  country: Country;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { countryCode } = params!;

  try {
    const countryInfo = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country-info/${countryCode}`);
    
    return {
      props: {
        country: countryInfo.data,
      },
    };
  } catch (error) {
    console.error('Error fetching country info:', error);
    
    return {
      notFound: true,
    };
  }
};

const CountryPage: React.FC<Props> = ({ country }) => {
  return <CountryInfo country={country} />;
};

export default CountryPage;
