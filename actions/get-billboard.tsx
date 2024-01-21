import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_STORE_ID}/billboards`;

const getBillboard = async (): Promise<Billboard> => {
  const res = await fetch(`${URL}?_sort=updatedAt:desc&_limit=1`);
  const [latestBillboard] = await res.json();

  return latestBillboard;
};

export default getBillboard;
