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
          const newData = params.data.map((item) => {
            const full_name = item.first_name + " " + item.last_name;
            return {
              ...item,
              full_name,
            };
          });

          return {
            userList: newData,
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
