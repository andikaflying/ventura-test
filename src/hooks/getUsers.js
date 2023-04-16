import React, { useEffect, useState } from "react";
import { getEndpointUrl } from "../utilities";
import useUser from "../stores/users";
import { USERS } from "../utilities";

export default function useUserList(query) {
  const { page, per_page } = query;
  console.log("Manggil useUserList");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { totalPage, setUserList } = useUser((state) => state);
  const params = {
    query,
    type: USERS,
  };
  const endpointUrl = getEndpointUrl({ ...params });

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (page <= totalPage) {
      try {
        fetch(URL)
          .then((resp) => resp.json())
          .then((response) => {
            setLoading(false);

            setUserList({
              data: response.data,
              total: response.total,
              page: response.page,
              total_pages: response.total_pages,
            });
          });
      } catch (error) {
        setError(true);
      }
    }

    return () => {};
  }, [page, totalPage, setUserList, endpointUrl]);

  return { loading, error };
}
