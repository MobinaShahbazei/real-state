import ByResidentialsPage from "@/template/ByResidentialsPage"


 async function ByResidentials() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  
  return (
    <ByResidentialsPage data={data.data}/>
  )
}

export default ByResidentials