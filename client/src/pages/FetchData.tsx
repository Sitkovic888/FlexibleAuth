import useGetAndStoreProducts from "@/hooks/useGetAndStoreProducts";

const FetchData = () => {
  const { weatherData, error, loading } = useGetAndStoreProducts();
  return (
    <>
      <div>FetchData</div>
    </>
  );
};

export default FetchData;
