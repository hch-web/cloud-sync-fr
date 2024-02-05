const { publicAPI } = require('.');

export const authApi = publicAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: body => ({
        url: '/login/',
        method: 'POST',
        body,
      }),
    }),

    forgotPassword: build.mutation({
      query: body => ({
        url: '/forgot-password/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useForgotPasswordMutation } = authApi;
