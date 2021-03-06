import { rest } from "msw";

const todos = [
  {
    id: "1",
    title: "title1",
  },
  {
    id: "2",
    title: "title2",
  },
  {
    id: "3",
    title: "title3",
  },
  {
    id: "4",
    title: "title4",
  },
  {
    id: "5",
    title: "title5",
  },
  {
    id: "6",
    title: "title6",
  },
];

export const handlers = [
  rest.get("/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");

    return res(
      ctx.json({
        projects: [
          {
            id: `1 ${pageIndex}`,
            name: `Juyoung 1-${pageIndex}`,
          },
          {
            id: `2 ${pageIndex}`,
            name: `Juyoung 2-${pageIndex}`,
          },
          {
            id: `3 ${pageIndex}`,
            name: `Juyoung 3-${pageIndex}`,
          },
          {
            id: `4 ${pageIndex}`,
            name: `Juyoung 4-${pageIndex}`,
          },
          {
            id: `5 ${pageIndex}`,
            name: `Juyoung 5-${pageIndex}`,
          },
        ],
        hasMore: pageIndex ? (+pageIndex < 4 ? pageIndex : undefined) : "",
        nextCursor: pageIndex ? (+pageIndex < 4 ? +pageIndex + 1 : undefined) : "",
      })
    );
  }),

  rest.get("/api/todos", (req, res, ctx) => {
    return res(ctx.json(todos));
  }),

  rest.post("/api/todos", (req: { body: any }, res, ctx) => {
    const { todo } = req.body;
    console.log("todo ", JSON.stringify(todo));

    todos.push(todo);

    return res(ctx.json({ message: true }));
  }),

  rest.get("/peoples", async (req, res, ctx) => {
    const firstName = req.url.searchParams.get("firstName");

    return res(
      ctx.json({
        data: {
          people: [
            {
              name: firstName,
              age: 135,
            },
            {
              name: "timmy",
              age: 13,
            },
            {
              name: "cindy",
              age: 15,
            },
            {
              name: "judy",
              age: 25,
            },
            {
              name: "marry",
              age: 64,
            },
            {
              name: "tommy",
              age: 109,
            },
          ],
        },
      })
    );
  }),
];
