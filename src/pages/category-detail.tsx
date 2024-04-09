import Loading from "@/components/loading";
import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const CategoryDetailPage = (props: Props) => {
  const params = useParams();

  return (
    <div>
      <Loading />
    </div>
  );
};

export default CategoryDetailPage;
