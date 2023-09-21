import React from "react";
import ContactForm from "./ContactForm";
import HomeLayout from "../../layout/HomeLayout";
import { Box } from "@mui/material";

function ContactUsPage() {
  return (
    <Box sx={{ padding: "120px 20px 60px 20px" }}>
      <ContactForm />
    </Box>
  );
}

export default ContactUsPage;

ContactUsPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
