import { GetServerSideProps } from "next";
import axios from "axios";
import CountryList from "@/components/CountryList";

interface Country {
  countryCode: string;
  name: string;
}

interface Props {
  countries: Country[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/countries`
    );

    return {
      props: {
        countries: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching countries:", error);

    return {
      props: {
        countries: [],
      },
    };
  }
};

const IndexPage: React.FC<Props> = ({ countries }) => {
  return (
    <>
      <CountryList countries={countries} />
    </>
  );
};

export default IndexPage;
