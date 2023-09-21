import { Box } from "@mui/material";
import ProductDetail from "./product-details";
import HomeLayout from "../../layout/HomeLayout";

export default function ProductDetailPage() {
  return (
    <HomeLayout>
      <Box>
        <ProductDetail />
      </Box>
    </HomeLayout>
  );
}
