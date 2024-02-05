import { privateAPI } from ".";

export const userAPI = privateAPI.injectEndpoints({
  endpoints: (build) => ({
    getUserDetail: build.query({
      query: () => "/get-user-detail/",
      providesTags: ["GetUserDetails"],
    }),
  }),
});

export const { useGetUserDetailQuery, useLazyGetUserDetailQuery } = userAPI;
