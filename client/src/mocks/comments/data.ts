import { OpenCommentsUsersListWidget } from "../../types/be/comment";
import { ServerPaginatedResponse } from "../../types/be/serverResponse";

export const index = {
  data: [
    {
      id: 22,
      body: "<p>dsad asd. adas</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655718435,
      updated_at: 1655718435,
      status: { id: 1, code: "open", name: "open" },
    },
    {
      id: 21,
      body: "<p>ds ad as sa dsa sa s</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716974,
      updated_at: 1655716974,
      status: { id: 2, code: "closed", name: "closed" },
    },
    {
      id: 20,
      body: "<p>dsad 32e 32 32</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716970,
      updated_at: 1655716970,
    },
    {
      id: 19,
      body: "<p>dsa dsa as das</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716967,
      updated_at: 1655716967,
    },
    {
      id: 18,
      body: "<p>dsd sa dsa dsa</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716965,
      updated_at: 1655716965,
    },
    {
      id: 17,
      body: "<ul><li>dsdsa sa as</li></ul>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716958,
      updated_at: 1655716958,
    },
    {
      id: 16,
      body: "<p>dsad sa dsad as</p>",
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716931,
      updated_at: 1655716931,
    },
    {
      id: 15,
      body: '<p><span class="mention" data-mention="Admin Super" data-user-id="1" href="#">@Admin Super</span>&nbsp;</p>',
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655716084,
      updated_at: 1655716084,
    },
    {
      id: 14,
      body: '<p>The remaining two tests test the array data structures in simple <i>ephemeral</i> and partially persistent situations. <span class="mention" data-mention="Admin Super" data-user-id="1" href="#">@Admin Super</span>&nbsp;</p>',
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655713170,
      updated_at: 1655713170,
    },
    {
      id: 13,
      body: '<p>ReactJS being a modern frontend library took it further by providing a Ref API to access its element, and even a step further through the useRef hook for a functional component. <span class="mention" data-mention="Internal User" data-user-id="2" href="#">@Internal User</span>&nbsp;</p>',
      user: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      files: [],
      created_at: 1655544836,
      updated_at: 1655544836,
    },
  ],
  links: {
    first: "http://localhost/api/comments?page=1",
    last: "http://localhost/api/comments?page=2",
    prev: null,
    next: "http://localhost/api/comments?page=2",
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 2,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/api/comments?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/api/comments?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/api/comments?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://localhost/api/comments",
    per_page: 10,
    to: 10,
    total: 13,
  },
};

export const mockOpenCommentsCountPerUserData: ServerPaginatedResponse<
  OpenCommentsUsersListWidget[]
> = {
  data: [
    {
      id: 1,
      first_name: "Admin",
      last_name: "Super",
      open_comments_count: 374,
      comments_count: 385,
    },
    {
      id: 2,
      first_name: "Internal",
      last_name: "User",
      open_comments_count: 0,
      comments_count: 0,
    },
    {
      id: 3,
      first_name: "Pavlo",
      last_name: "Medynskiy",
      open_comments_count: 0,
      comments_count: 0,
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 17,
    path: "http://localhost/api/users/comments",
    per_page: 10,
    to: 10,
    total: 167,
  },
};

export const mockUpdateCommentStatusData = {
  data: index?.data[0],
};

export const mockUpdateCommentStatusData2 = {
  data: index?.data[1],
};
