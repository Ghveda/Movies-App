import Card from "components/Card";
import { useGetPostsQuery } from "store/api/postsApi";
import { ICinemaList } from "./CinemaList.config";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const CinemaList = ({ category }: ICinemaList) => {
  const { pathname } = useLocation();

  const [page, setPage] = useState(1);
  const { data: posts, refetch } = useGetPostsQuery({
    _limit: 4,
    _page: page,
    category,
    liked: pathname === "/favorites" ? true : undefined,
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-5">
        {posts?.map((cinema) => (
          <Card post={cinema} key={cinema.id} refetchPosts={() => refetch()} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Stack spacing={2}>
          <Pagination
            onChange={handlePageChange}
            count={3}
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
