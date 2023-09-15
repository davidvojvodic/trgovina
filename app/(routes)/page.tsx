import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
