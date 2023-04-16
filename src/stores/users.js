import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set, get) => ({
      total: 0,
      userList: [],
      totalPage: 1,
      currentPage: 1,
      setUserList: (params) => {
        set((state) => {
          return {
            userList: params.data,
            total: params.total,
            currentPage: params.page,
            totalPage: params.total_pages,
          };
        });
      },
    }),
    { name: "user" }
  )
);
export default useUser;
