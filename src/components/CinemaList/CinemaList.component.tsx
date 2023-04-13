import Card from "components/Card";
import { useGetPostsQuery } from "store/api/postsApi";
import { ICinemaList } from "./CinemaList.config";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const CinemaList = ({ category }: ICinemaList) => {
  const { pathname } = useLocation();

  const [page, setPage] = useState(1);
  const { data: posts } = useGetPostsQuery({
    _limit: 4,
    _page: page,
    category,
    liked: pathname === "/favorites" ? true : undefined,
  });

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <div className="w-full mb-10">
      <div className="flex flex-wrap gap-5">
        {posts?.posts?.map((cinema) => (
          <Card post={cinema} key={cinema.id} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Stack spacing={2}>
          <Pagination
            onChange={handlePageChange}
            count={Math.ceil(+posts?.totalPosts! / 4) || 1}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default CinemaList;
