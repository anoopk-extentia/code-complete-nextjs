import Home from "pages";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const usersResponse = rest.get(`*/v0/users`, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        name: "Saurabh",
      },
    ])
  );
});

const namesResponse = rest.get(`*/v0/names`, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        text: "hello world 2",
        role: null,
      },
    ])
  );
});

const errorHandler = rest.get("*", (req, res, ctx) =>
  res.networkError("Boom there was error")
);

const handlers = [usersResponse, namesResponse];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home Page", () => {
  it("Users API called successfully", async () => {
    render(<Home />);
    await waitFor(() => expect(screen.getByText("Saurabh")).toBeVisible());
  });

  it("Names API called successfully", async () => {
    render(<Home />);
    await waitFor(() =>
      expect(screen.getByText("hello world 2")).toBeVisible()
    );
  });

  it("API call failed", async () => {
    server.use(errorHandler);
    render(<Home />);
    await waitFor(() =>
      expect(screen.getByText("Something went wrong !!")).toBeVisible()
    );
  });
});
